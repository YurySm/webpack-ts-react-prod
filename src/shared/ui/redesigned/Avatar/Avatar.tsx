import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../../deprecated/Avatar/Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';
import { AppImage } from '../../redesigned/AppImage';
import UserIcon from '@/shared/assets/icons/user-32-32.png';
import { Icon } from '../../redesigned/Icon';
import { Skeleton } from '../../redesigned/Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = ({ className, src, alt, size = 100 }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = (
        <Skeleton width={size} height={size} borderRadius={'50%'} />
    );
    const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, {}, [className])}
        />
    );
};
