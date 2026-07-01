import { memo } from 'react';
import cls from '@/shared/ui/deprecated/AppLogo/AppLogo.module.scss';
import { HStack } from '@/shared/ui/deprecated/Stack';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
    className?: string;
}

/**
 * Устарел, использовать из папки redesigned
 * @deprecated
 */

export const AppLogo = memo(({ className }: AppLogoProps) => {
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <AppSvg className={cls.appLogo} />
        </HStack>
    );
});

AppLogo.displayName = 'AppLogo';
