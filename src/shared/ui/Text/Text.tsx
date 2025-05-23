import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export enum TextSize {
    L = 'sizeL',
    M = 'sizeM',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const { className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M
    } = props

    return (
        <div className={ classNames(cls.textWrapp, {}, [className, cls[theme], cls[align], cls[size]]) }>
            {title && <p className={ cls.title }>{title}</p>}
            {text && <p className={ cls.text }>{text}</p>}
        </div>
    );
},
);
Text.displayName = 'Text';
