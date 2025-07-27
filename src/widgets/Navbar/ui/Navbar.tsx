import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutesPaths } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { Dropdown, Popover } from 'shared/ui/popups';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)

    const dispatch = useAppDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    // const isAdminPanelAvailable = isAdmin || isManager
    //
    // useEffect(() => {
    //
    // })

    if (authData) {
        return (
            <header className={ classNames(cls.navbar, {}, [className]) }>
                <Text
                    className={ cls.title }
                    theme={ TextTheme.INVERTED }
                    title={ t('Articles App') }/>

                <HStack gap={ '16' } justify={ 'between' }>
                    <AppLink
                        theme={ AppLinkTheme.SECONDARY }
                        to={ RoutesPaths.article_create }>
                        {t('Создать статью')}
                    </AppLink>

                    <HStack gap={ '16' } max={ false }>
                        <Popover
                            anchor={ 'bottom end' }
                            trigger={
                                <Button theme={ ButtonTheme.CLEAR }>
                                    <Icon inverted Svg={ NotificationIcon }/>
                                </Button>
                            }
                        >
                            DASFASDFASD
                        </Popover>
                        <Dropdown
                            anchor={ 'bottom end' }
                            items={ [
                                ...((isAdmin || isManager) ? [{
                                    content: t('Админка'),
                                    href: RoutesPaths.admin_panel
                                }] : []),
                                {
                                    content: t('Профиль'),
                                    href: RoutesPaths.profile + authData.id
                                },
                                {
                                    content: t('Выйти'),
                                    onClick: onLogout
                                },

                            ] }
                            trigger={ <Avatar size={ 30 } src={ authData.avatar } /> }
                        />
                    </HStack>
                </HStack>
            </header>
        );
    }

    return (
        <header className={ classNames(cls.navbar, {}, [className]) }>
            <div className={ cls.links }>
                <Button
                    theme={ ButtonTheme.CLEAR_INVERTED }
                    type="button"
                    onClick={ onShowModal }
                >
                    {t('Войти')}
                </Button>

                {isAuthModal && (
                    <LoginModal isOpen={ isAuthModal } onClose={ onCloseModal } />
                )}
            </div>
        </header>
    );
});

Navbar.displayName = 'Navbar';
