import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss'
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import { useCallback } from 'react';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useAppSelector(getProfileReadonly)
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(true))
    }, [dispatch]);


    return (
        <div className={ classNames(cls.profilePageHeader, {}, [className]) }>
            <Text title={ t('Профиль') } />
            {
                readonly ?
                    <Button
                        onClick={ onEdit }
                        theme={ ButtonTheme.OUTLINE }>
                        {t('Редактировать')}
                    </Button> :
                    <Button
                        onClick={ onCancelEdit }
                        theme={ ButtonTheme.OUTLINE }>
                        {t('Отменить')}
                    </Button>
            }
        </div>
    );
};