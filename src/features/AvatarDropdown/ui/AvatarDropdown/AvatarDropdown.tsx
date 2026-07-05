import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdawnDeprecated } from '@/shared/ui/deprecated/popups';
import { useTranslation } from 'react-i18next';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/constants/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/popups/ui/Dropdown/Dropdown';
import { Avatar } from '@/shared/ui/redesigned/Avatar/Avatar';

export const AvatarDropdown = () => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const dispatch = useAppDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) return null;

    const items = [
        ...(isAdmin || isManager
            ? [
                  {
                      content: t('Админка'),
                      href: getRouteAdminPanel(),
                  },
              ]
            : []),
        {
            content: t('Профиль'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Выйти'),
            onClick: onLogout,
        },
    ];

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Dropdown
                    anchor={'bottom end'}
                    items={items}
                    trigger={<Avatar size={40} src={authData.avatar} />}
                />
            }
            off={
                <DropdawnDeprecated
                    anchor={'bottom end'}
                    items={items}
                    trigger={
                        <AvatarDeprecated
                            size={30}
                            src={authData.avatar}
                            invertedFallback
                        />
                    }
                />
            }
        />
    );
};
