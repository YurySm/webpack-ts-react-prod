import { classNames } from 'shared/lib/classNames/classNames';
import {
	ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

const ANIMATION_DALEY = 300;

export const Modal = ({
	className,
	children,
	isOpen,
	onClose,
}: ModalProps) => {
	const [isClosing, setIsClosing] = useState<boolean>(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

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

	const keydownClose = useCallback((event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			handleClose();
		}
	}, [handleClose]);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', keydownClose);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', keydownClose);
		};
	}, [isOpen, keydownClose]);

	return (
		<Portal>
			<div className={ classNames(cls.modal, mods, [className]) }>
				<div className={ cls.overlay } onClick={ handleClose }>
					<div className={ cls.content } onClick={ (e) => e.stopPropagation() }>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
