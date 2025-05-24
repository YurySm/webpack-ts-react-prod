import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { useCallback } from 'react';

interface CodeProps {
    className?: string;
    codeStr: string;
}

export const Code = (props: CodeProps) => {
    const {
        className,
        codeStr
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(codeStr);
    }, [codeStr])

    return (
        <pre className={ classNames(cls.code, {}, [className]) }>
            <Button
                className={ cls.copyBtn }
                onClick={ onCopy }
            >
                <CopyIcon className={ cls.copyIcon } />
            </Button>

            <code>
                {codeStr}
            </code>
        </pre>
    );
};