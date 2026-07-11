import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { HTMLAttributes, ReactNode } from 'react';

export type CardVariant = 'normal' | 'outlined' | 'light';

export type CardPadding = '0' | '8' | '16' | '24';

export type CardBorder = 'round' | 'normal' | 'partial';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    variant?: CardVariant;
    padding?: CardPadding;
    border?: CardBorder;
    max?: boolean;
}

const mapCardPaddingClasses: Record<CardPadding, string> = {
    '0': 'padding0',
    '8': 'padding8',
    '16': 'padding16',
    '24': 'padding24',
};

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        padding = '8',
        border = 'normal',
        max = true,
        ...otherProps
    } = props;

    const cardPadding = mapCardPaddingClasses[padding];

    return (
        <div
            className={classNames(cls.card, { [cls.max]: max }, [
                cls[variant],
                cls[cardPadding],
                cls[border],
                className,
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
