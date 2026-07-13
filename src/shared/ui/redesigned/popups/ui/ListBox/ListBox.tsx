import {
    Listbox as HListBox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';
import cls from './ListBox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../../../Button/Button';
import popupsCls from '../../styles/popups.module.scss';
import { Icon } from '../../../Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Flex, FlexDirection } from '../../../Stack';

export interface ListBoxItem {
    value: string;
    label: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items?: ListBoxItem[];
    className?: string;
    value?: T;
    defaultValue?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
    label?: ReactNode;
    labelDirection?: FlexDirection;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        items = [],
        defaultValue,
        onChange,
        value,
        readonly,
        label,
        labelDirection = 'row',
    } = props;

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

    return (
        <HListBox
            as={'div'}
            className={classNames(cls.listbox, {}, [className])}
            value={value}
            onChange={onChange}
            disabled={readonly}
        >
            <Flex direction={labelDirection} gap={'8'}>
                {label && <span>{label + ': '}</span>}
                <ListboxButton
                    as={Button}
                    variant={'filled'}
                    addonRight={<Icon Svg={ArrowIcon} />}
                >
                    {selectedItem?.label || defaultValue}
                </ListboxButton>
            </Flex>

            <ListboxOptions
                className={classNames(cls.options, {}, [popupsCls.panel])}
                anchor={'bottom start'}
            >
                {items.map((item) => (
                    <ListboxOption
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                        as={Fragment}
                    >
                        {({ selected, focus, disabled }) => (
                            <li
                                className={classNames(
                                    cls.option,
                                    {
                                        [cls.selected]: selected,
                                        [cls.active]: focus,
                                        [cls.disabled]: disabled,
                                    },
                                    [],
                                )}
                            >
                                {item.label}
                            </li>
                        )}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </HListBox>
    );
};
