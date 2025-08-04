import { Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import cls from './ListBox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

export interface ListBoxItem {
    value: string
    label: ReactNode
    disabled?: boolean
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
    label?: ReactNode;
}

export function ListBox(props: ListBoxProps) {
    const {
        className,
        items = [],
        defaultValue,
        onChange,
        value,
        readonly,
        label
    } = props;

    return (
        <HListBox
            as={ 'div' }
            className={ classNames(cls.listbox, {}, [className]) }
            value={ value }
            onChange={ onChange }
            disabled={ readonly }
        >
            {label && <span>{label + ': '}</span>}
            <ListboxButton
                as={ Fragment }
            >
                <Button theme={ ButtonTheme.BACKGROUND_INVERTED }>
                    {value || defaultValue}
                </Button>
            </ListboxButton>
            <ListboxOptions
                className={ cls.options }
                anchor={ 'bottom start' }>
                {items.map(item => (
                    <ListboxOption
                        key={ item.value }
                        value={ item.value }
                        disabled={ item.disabled }
                        as={ Fragment }>
                        {({ selected, focus, disabled }) => (
                            <li className={ classNames(cls.option, { [cls.selected]: selected, [cls.active]: focus, [cls.disabled]: disabled }, []) }>
                                {item.label}
                            </li>
                        )}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </HListBox>
    )
}