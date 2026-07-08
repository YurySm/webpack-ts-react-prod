import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    ReactNode,
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
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
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
        addonLeft,
        addonRight,
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

        const mods: Mods = {
            [cls.readOnly]: readOnly,
            [cls.withAddonLeft]: Boolean(addonLeft),
            [cls.withAddonRight]: Boolean(addonRight),
        };

        return (
            <div className={classNames(cls.inputWrapp, mods, [className])}>
                <div className={cls.addonLeft}>{addonLeft}</div>
                <input
                    ref={ref}
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    readOnly={readOnly}
                    placeholder={placeholder}
                    {...otherProps}
                />
                <div className={cls.addonRight}>{addonRight}</div>
            </div>
        );
    },
);

Input.displayName = 'Input';
