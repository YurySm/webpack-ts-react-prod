import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import { Popover as HPopover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Fragment, ReactNode } from 'react';
import { AnchorTo } from '../../types/popups';
import popupsCls from '../../styles/popups.module.scss'

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    anchor?: AnchorTo
    children?: ReactNode
}

export const Popover = (props: PopoverProps) => {
    const {
        className,
        trigger,
        anchor,
        children
    } = props;

    return (
        <HPopover
            className={ classNames(cls.popover, {}, [className]) }>
            <PopoverButton
                as={ 'div' }
                className={ popupsCls.trigger }
            >
                {trigger}
            </PopoverButton>

            <PopoverPanel
                anchor={ anchor || 'bottom start' }
                className={ popupsCls.panel }>
                {children}
            </PopoverPanel>
        </HPopover>
    );
};