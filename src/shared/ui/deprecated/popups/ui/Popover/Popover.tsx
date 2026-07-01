import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '@/shared/ui/deprecated/popups/ui/Popover/Popover.module.scss';
import {
    Popover as HPopover,
    PopoverButton,
    PopoverPanel,
} from '@headlessui/react';
import { ReactNode } from 'react';
import { AnchorTo } from '@/shared/ui/deprecated/popups/types/popups';
import popupsCls from '@/shared/ui/deprecated/popups/styles/popups.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    anchor?: AnchorTo;
    children?: ReactNode;
}

/**
 * Устарел, использовать из папки redesigned
 * @deprecated
 */

export const Popover = (props: PopoverProps) => {
    const { className, trigger, anchor, children } = props;

    return (
        <HPopover className={classNames(cls.popover, {}, [className])}>
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
