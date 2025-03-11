import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss'
import { ChangeEvent, memo, useMemo } from 'react';

export interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readOnly = false
    } = props

    const optionsList = useMemo(() => {
        return options.map(({ value, label }: SelectOption) => (
            <option
                key={ value }
                value={ value }
            >
                {label}
            </option>
        ))
    }, [options])

    const onChangeHandler = (e:  ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
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
});

Select.displayName = 'Select';