// import cls from './Popover.module.scss';
import {
    Popover as HPopover,
    PopoverButton,
    PopoverPanel,
} from '@headlessui/react';
import { ReactNode } from 'react';
import popupsCls from '../../styles/popups.module.scss';
import { AnchorTo } from '../../types/popups';
import { classNames } from '@/shared/lib/classNames/classNames';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    anchor?: AnchorTo;
    children?: ReactNode;
}

export const Popover = (props: PopoverProps) => {
    const { className, trigger, anchor, children } = props;

    return (
        // <HPopover className={classNames(cls.popover, {}, [className])}>\
        <HPopover className={classNames('', {}, [className])}>
            <PopoverButton as={'div'} className={popupsCls.trigger}>
                {trigger}
            </PopoverButton>

            <PopoverPanel
                anchor={anchor || 'bottom start'}
                className={popupsCls.panel}
            >
                {children}
            </PopoverPanel>
        </HPopover>
    );
};
