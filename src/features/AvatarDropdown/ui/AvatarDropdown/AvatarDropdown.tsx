import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/popups';
import { useTranslation } from 'react-i18next';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/constants/router';

export const AvatarDropdown = () => {

    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)

    const dispatch = useAppDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if(!authData) return null;

    return (
        <Dropdown
            anchor={ 'bottom end' }
            items={ [
                ...((isAdmin || isManager) ? [{
                    content: t('Админка'),
                    href: getRouteAdminPanel()
                }] : []),
                {
                    content: t('Профиль'),
                    href: getRouteProfile(authData.id)
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout
                },

            ] }
            trigger={ <Avatar size={ 30 } src={ authData.avatar } /> }
        />
    );
};