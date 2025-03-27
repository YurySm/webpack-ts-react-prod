import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { ReactNode } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface CodeProps {
    className?: string;
    codeStr: string;
}

export const Code = (props: CodeProps) => {
    const {
        className,
        codeStr
    } = props;

    return (
        <pre className={ classNames(cls.code, {}, [className]) }>
            <Button theme={ ButtonTheme.OUTLINE } className={ cls.copyBtn }>+</Button>
            <code>
                {codeStr}
            </code>
        </pre>
    );
};