import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { FC, SVGProps } from 'react';

type SvgProps = Omit<SVGProps<SVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: FC<SVGProps<SVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
    clickable: true;
    onClick?: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        clickable,
        width = 32,
        height = 32,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={classNames(cls.icon, {}, [className])}
            {...otherProps}
            onClick={undefined}
            width={width}
            height={height}
        />
    );

    if (clickable) {
        return (
            <button
                type={'button'}
                onClick={props.onClick}
                className={cls.button}
                style={{ width, height }}
            >
                {icon}
            </button>
        );
    }

    return icon;
};
