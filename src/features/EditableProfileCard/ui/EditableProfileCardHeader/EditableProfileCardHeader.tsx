import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EditableProfileCardHeader.module.scss';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { useTranslation } from 'react-i18next';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { useCallback } from 'react';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface ProfilePageHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = ({
    className,
}: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    const authData = useAppSelector(getUserAuthData);
    const profileData = useAppSelector(getProfileData);
    const isCanEdit = authData?.id === profileData?.id;
    const readonly = useAppSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card padding={'24'}>
                    <HStack justify={'between'}>
                        <Text title={t('Профиль')} />
                        {isCanEdit && (
                            <div className={cls.editBtns}>
                                {readonly ? (
                                    <Button
                                        onClick={onEdit}
                                        variant={'outline'}
                                        data-testid={
                                            'EditableProfileCardHeader.EditButton'
                                        }
                                    >
                                        {t('Редактировать')}
                                    </Button>
                                ) : (
                                    <>
                                        <Button
                                            color={'error'}
                                            onClick={onCancelEdit}
                                            variant={'outline'}
                                            data-testid={
                                                'EditableProfileCardHeader.CancelButton'
                                            }
                                        >
                                            {t('Отменить')}
                                        </Button>

                                        <Button
                                            color={'success'}
                                            onClick={onSave}
                                            variant={'outline'}
                                            data-testid={
                                                'EditableProfileCardHeader.SaveButton'
                                            }
                                        >
                                            {t('Сохранить')}
                                        </Button>
                                    </>
                                )}
                            </div>
                        )}
                    </HStack>
                </Card>
            }
            off={
                <div
                    className={classNames(cls.editableProfileCardHeader, {}, [
                        className,
                    ])}
                >
                    <TextDeprecated title={t('Профиль')} />
                    {isCanEdit && (
                        <div className={cls.editBtns}>
                            {readonly ? (
                                <ButtonDeprecated
                                    onClick={onEdit}
                                    theme={ButtonTheme.OUTLINE}
                                    data-testid={
                                        'EditableProfileCardHeader.EditButton'
                                    }
                                >
                                    {t('Редактировать')}
                                </ButtonDeprecated>
                            ) : (
                                <>
                                    <ButtonDeprecated
                                        onClick={onCancelEdit}
                                        theme={ButtonTheme.OUTLINE_RED}
                                        data-testid={
                                            'EditableProfileCardHeader.CancelButton'
                                        }
                                    >
                                        {t('Отменить')}
                                    </ButtonDeprecated>

                                    <ButtonDeprecated
                                        onClick={onSave}
                                        theme={ButtonTheme.OUTLINE}
                                        data-testid={
                                            'EditableProfileCardHeader.SaveButton'
                                        }
                                    >
                                        {t('Сохранить')}
                                    </ButtonDeprecated>
                                </>
                            )}
                        </div>
                    )}
                </div>
            }
        />
    );
};
