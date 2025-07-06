import { Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions, ListboxProps } from '@headlessui/react';
import { Fragment, ReactNode, useState } from 'react';
import cls from './ListBox.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

// const people = [
//     { id: 1, name: 'Durward Reynolds', disabled: true },
//     { id: 2, name: 'Kenton Towne' },
//     { id: 3, name: 'Therese Wunsch' },
//     { id: 4, name: 'Benedict Kessler' },
//     { id: 5, name: 'Katelyn Rohan' },
// ]

export interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
}

export function ListBox(props: ListBoxProps) {
    const {
        className,
        items = [],
        defaultValue,
        onChange,
        value
    } = props;

    return (
        <HListBox
            as={ 'div' }
            className={ classNames(cls.listbox, {}, [className]) }
            value={ value }
            onChange={ onChange }
        >
            <ListboxButton
                // className={ cls.trigger }
                as={ Fragment }
            >
                <Button theme={ ButtonTheme.BACKGROUND_INVERTED } className={ cls.trigger }>
                    {value || defaultValue}
                </Button>
            </ListboxButton>
            <ListboxOptions
                className={ cls.options }
                anchor="bottom">
                {items.map(item => (
                    <ListboxOption
                        key={ item.value }
                        value={ item.value }
                        disabled={ item.disabled }
                        as={ Fragment }>
                        {({ selected, focus, disabled }) => (
                            <li className={ classNames(cls.option, { [cls.selected]: selected, [cls.active]: focus, [cls.disabled]: disabled }, []) }>
                                {item.content}
                            </li>
                        )}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </HListBox>
    )
}