import { useCallback, useEffect, useRef, useState } from 'react';

interface UseModalProps {
    onClose?: () => void;
    animationDaley: number
    isOpen?: boolean
}

export function useModal({ onClose, isOpen, animationDaley }: UseModalProps) {
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDaley);
        }
    }, [animationDaley, onClose]);

    const keydownClose = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                close();
            }
        },
        [close],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', keydownClose);
        }

        return () => {
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

    return {
        isClosing,
        isMounted,
        close
    }
}