import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { getRouteArticleCreate } from '@/shared/constants/router';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

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
                        to={ getRouteArticleCreate() }>
                        {t('Создать статью')}
                    </AppLink>

                    <HStack gap={ '16' } max={ false }>
                        <NotificationButton />
                        <AvatarDropdown />
                    </HStack>
                </HStack>
            </header>
        );
    }

    return (
        <header className={ classNames(cls.navbar, {}, [className]) }>
            <HStack justify={ 'end' }>
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
            </HStack>
        </header>
    );
});

Navbar.displayName = 'Navbar';
