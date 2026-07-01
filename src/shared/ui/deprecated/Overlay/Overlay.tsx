import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '@/shared/ui/deprecated/Overlay/Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

/**
 * Устарел, использовать из папки redesigned
 * @deprecated
 */

export const Overlay = (props: OverlayProps) => {
    const { className, onClick } = props;

    return (
        <div
            onClick={onClick}
            className={classNames(cls.overlay, {}, [className])}
        />
    );
};
