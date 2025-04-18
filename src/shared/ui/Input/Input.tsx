import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    useCallback,
    useEffect,
    useRef,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readOnly?: boolean;
    placeholder?: string;
}

export const Input = memo(
    ({
        className,
        value,
        type = 'text',
        onChange,
        autofocus,
        readOnly = false,
        placeholder,
        ...otherProps
    }: InputProps) => {
        const ref = useRef<HTMLInputElement>(null);

        const handleChange = useCallback(
            (e: ChangeEvent<HTMLInputElement>) => {
                onChange?.(e.target.value);
            },
            [onChange],
        );

        useEffect(() => {
            if (autofocus) {
                ref.current?.focus();
            }
        }, [autofocus]);

        return (
            <div className={ classNames(cls.inputWrapp, { [cls.readOnly]: readOnly }, [className]) }>
                {placeholder && <span className={ cls.placeholder }>{placeholder}</span>}

                <input
                    ref={ ref }
                    className={ cls.input }
                    type={ type }
                    value={ value }
                    onChange={ handleChange }
                    readOnly={ readOnly }
                    { ...otherProps }
                />
            </div>
        );
    },
);

Input.displayName = 'Input';
