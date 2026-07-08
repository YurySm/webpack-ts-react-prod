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
import { HStack } from '../Stack';
import { Text } from '../Text';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    label?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    size?: InputSize;
}

export const Input = memo(
    ({
        className,
        value,
        label,
        type = 'text',
        onChange,
        autofocus,
        readOnly = false,
        placeholder,
        addonLeft,
        addonRight,
        size = 'm',
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

        const input = (
            <div
                className={classNames(cls.inputWrapp, mods, [
                    cls[size],
                    className,
                ])}
            >
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

        if (label) {
            return (
                <HStack gap={'8'}>
                    <Text text={label} />
                    {input}
                </HStack>
            );
        }

        return input;
    },
);

Input.displayName = 'Input';
