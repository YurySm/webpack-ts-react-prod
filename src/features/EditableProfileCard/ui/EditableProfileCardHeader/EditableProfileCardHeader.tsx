import { classNames } from 'shared/lib/classNames/classNames';
import cls from './EditableProfileCardHeader.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { useCallback } from 'react';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ProfilePageHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    const authData = useAppSelector(getUserAuthData)
    const profileData = useAppSelector(getProfileData)
    const isCanEdit = authData?.id === profileData?.id
    const readonly = useAppSelector(getProfileReadonly)
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch]);

    return (
        <div className={ classNames(cls.editableProfileCardHeader, {}, [className]) }>
            <Text title={ t('Профиль') } />
            {
                isCanEdit && (
                    <div className={ cls.editBtns }>
                        {
                            readonly ?
                                <Button
                                    onClick={ onEdit }
                                    theme={ ButtonTheme.OUTLINE }>
                                    {t('Редактировать')}
                                </Button> :
                                <>
                                    <Button
                                        onClick={ onCancelEdit }
                                        theme={ ButtonTheme.OUTLINE_RED }>
                                        {t('Отменить')}
                                    </Button>

                                    <Button
                                        onClick={ onSave }
                                        theme={ ButtonTheme.OUTLINE }>
                                        {t('Сохранить')}
                                    </Button>
                                </>
                        }
                    </div>
                )
            }
        </div>
    );
};