import { classNames } from '@/shared/lib/classNames/classNames';
import '@/shared/ui/deprecated/Loader/Loader.scss';

interface PageLoaderProps {
    className?: string;
}

/**
 * Устарел, использовать из папки redesigned
 * @deprecated
 */

export const Loader = ({ className }: PageLoaderProps) => (
    <div className={classNames('lds-roller', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
