import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutesPaths } from 'shared/config/routeConfig/routeConfig';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
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

    if (authData) {
        return (
            <header className={ classNames(cls.navbar, {}, [className]) }>
                <Text
                    theme={ TextTheme.INVERTED }
                    title={ t('Articles App') }/>

                <div className={ cls.links }>
                    <AppLink
                        theme={ AppLinkTheme.SECONDARY }
                        to={ RoutesPaths.article_create }>
                        {t('Создать статью')}
                    </AppLink>
                    <Button
                        theme={ ButtonTheme.CLEAR_INVERTED }
                        type="button"
                        onClick={ onLogout }
                    >
                        {t('Выйти')}
                    </Button>
                </div>
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
