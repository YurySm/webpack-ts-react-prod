import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss'
import { ChangeEvent, useMemo } from 'react';

export interface SelectOption<T extends string> {
    value: T;
    label: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readOnly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options = [],
        value,
        onChange,
        readOnly = false
    } = props

    const optionsList = useMemo(() => {
        return options.map(({ value, label }: SelectOption<T>) => (
            <option
                key={ value }
                value={ value }
            >
                {label}
            </option>
        ))
    }, [options])

    const onChangeHandler = (e:  ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T)
    }

    return (
        <div className={ classNames(cls.wrapper, { [cls.readOnly]: readOnly }, [className]) }>
            {label && <span className={ cls.label }>{label}</span>}
            <select
                className={ cls.select }
                value={ value }
                onChange={ onChangeHandler }
                disabled={ readOnly }
            >
                {optionsList}
            </select>
        </div>
    );
};

