import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { getRouteArticleCreate } from '@/shared/constants/router';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

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

    const mainClassName = toggleFeatures({
        name: 'isAppRedesigned',
        off: () => cls.navbar,
        on: () => cls.navbarRedesigned,
    });

    if (authData) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <header
                        className={classNames(mainClassName, {}, [className])}
                    >
                        <HStack gap={'16'} max={false}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                off={
                    <header
                        className={classNames(mainClassName, {}, [className])}
                    >
                        <Text
                            className={cls.title}
                            theme={TextTheme.INVERTED}
                            title={t('Articles App')}
                        />

                        <HStack gap={'16'} justify={'between'}>
                            <AppLink
                                theme={AppLinkTheme.SECONDARY}
                                to={getRouteArticleCreate()}
                            >
                                {t('Создать статью')}
                            </AppLink>

                            <HStack gap={'16'} max={false}>
                                <NotificationButton />
                                <AvatarDropdown />
                            </HStack>
                        </HStack>
                    </header>
                }
            />
        );
    }

    return (
        <header className={classNames(mainClassName, {}, [className])}>
            <HStack justify={'end'}>
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <Button
                            variant={'clear'}
                            type="button"
                            onClick={onShowModal}
                        >
                            {t('Войти')}
                        </Button>
                    }
                    off={
                        <ButtonDeprecated
                            theme={ButtonTheme.CLEAR_INVERTED}
                            type="button"
                            onClick={onShowModal}
                        >
                            {t('Войти')}
                        </ButtonDeprecated>
                    }
                />

                {isAuthModal && (
                    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                )}
            </HStack>
        </header>
    );
});

Navbar.displayName = 'Navbar';
