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
    S = 'sizeS',
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

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.L]: 'h1',
    [TextSize.M]: 'h2',
    [TextSize.S]: 'h3'
}


export const Text = memo((props: TextProps) => {
    const { className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M
    } = props

    const HeaderTag = mapSizeToHeaderTag[size]

    return (
        <div className={ classNames(cls.textWrapp, {}, [className, cls[theme], cls[align], cls[size]]) }>
            {title && <HeaderTag className={ cls.title }>{title}</HeaderTag>}
            {text && <p className={ cls.text }>{text}</p>}
        </div>
    );
},
);
Text.displayName = 'Text';
