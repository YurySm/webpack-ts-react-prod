import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { FC, SVGProps } from 'react';

interface IconProps extends SVGProps<SVGElement>{
    className?: string;
    Svg: FC<SVGProps<SVGElement>>
    inverted?: boolean
}

export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        inverted = false,
        ...otherProps
    } = props;

    return (
        <Svg
            className={ classNames(cls.icon, { [cls.inverted]: inverted }, [className]) }
            { ...otherProps }
        />
    );
};