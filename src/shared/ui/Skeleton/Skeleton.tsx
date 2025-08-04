import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';
import { CSSProperties } from 'react';

interface SkeletonProps {
    className?: string;
    width?: number | string;
    height?: number | string;
    borderRadius?: number | string;
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className,
        width,
        height,
        borderRadius,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius,
    }
    return (
        <div
            className={ classNames(cls.skeleton, {}, [className]) }
            style={ styles }
        />
    );
};