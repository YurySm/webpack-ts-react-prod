import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';

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

    const mods: Record<string, boolean> = {
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
            clearTimeout(timerRef.current);
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
                <div className={ cls.overlay } onClick={ handleClose }>
                    <div
                        className={ cls.content }
                        onClick={ (e) => e.stopPropagation() }
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
