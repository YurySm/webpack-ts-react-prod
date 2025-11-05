import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss'
import { CSSProperties, useMemo } from 'react';
import { AppImage } from '@/shared/ui/AppImage';
import UserIcon from '@/shared/assets/icons/user-avatar.svg'
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    invertedFallback?: boolean;
}

export const Avatar = ({ className, src, alt, size = 100, invertedFallback }: AvatarProps) => {

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size])

    const fallback = <Skeleton width={ size } height={ size } borderRadius={ '50%' }/>
    const errorFallback = <Icon Svg={ UserIcon } width={ size } height={ size } inverted={ invertedFallback } />

    return (
        <AppImage
            fallback={ fallback }
            errorFallback={ errorFallback }
            src={ src }
            alt={ alt }
            style={ styles }
            className={ classNames(cls.avatar, {}, [className]) } />
    );
};