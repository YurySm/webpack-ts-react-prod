import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { Portal } from '@/shared/ui/Portal';
import cls from './Modal.module.scss';
import { Overlay } from '@/shared/ui/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DALEY = 300;

export const Modal = ({
    className,
    children,
    isOpen,
    onClose,
    lazy,
}: ModalProps) => {
    const { theme } = useTheme();

    const { close, isMounted, isClosing } = useModal({ animationDaley: ANIMATION_DALEY, isOpen, onClose })

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={ classNames(cls.modal, mods, [className, theme]) }>
                <Overlay onClick={ close }/>
                <div className={ cls.content }>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
