import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import cls from './Dropdown.module.scss';
import popupsCls from '../../styles/popups.module.scss';
import { AnchorTo } from '../..//types/popups';
import { AppLink } from '../../../AppLink/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface DropdownItem {
    href?: string;
    content?: string;
    onClick?: () => void;
    disabled?: boolean;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    anchor?: AnchorTo;
}

export function Dropdown(props: DropdownProps) {
    const { className, items, trigger, anchor } = props;
    return (
        <Menu as={'div'} className={classNames(cls.dropdown, {}, [className])}>
            <MenuButton className={popupsCls.trigger}>{trigger}</MenuButton>
            <MenuItems
                className={popupsCls.panel}
                anchor={anchor || 'bottom start'}
            >
                {items.map((item, index) => {
                    const content = ({ focus }: { focus: boolean }) => (
                        <button
                            type={'button'}
                            onClick={item.onClick}
                            className={classNames(
                                cls.item,
                                { [cls.focus]: focus },
                                [],
                            )}
                        >
                            {item.content}
                        </button>
                    );

                    if (item?.href) {
                        return (
                            <MenuItem
                                key={'dropdown-item' + index}
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </MenuItem>
                        );
                    }

                    return (
                        <MenuItem
                            key={'dropdown-item' + index}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {content}
                        </MenuItem>
                    );
                })}
            </MenuItems>
        </Menu>
    );
}
