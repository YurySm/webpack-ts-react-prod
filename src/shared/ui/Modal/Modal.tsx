import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from 'shared/ui/Overlay/Overlay';

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
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DALEY);
        }
    }, [onClose]);

    const keydownClose = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        },
        [handleClose],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', keydownClose);
        }

        return () => {
            console.log(timerRef.current);
            if(timerRef && timerRef.current) {
                clearTimeout(timerRef.current);
            }
            window.removeEventListener('keydown', keydownClose);
        };
    }, [isOpen, keydownClose]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={ classNames(cls.modal, mods, [className, theme]) }>
                <Overlay onClick={ handleClose }/>
                <div className={ cls.content }>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
