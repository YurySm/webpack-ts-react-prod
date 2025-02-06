import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss'
import { ReactNode } from 'react';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
	}
	return (
		<div className={ classNames(cls.modal, mods, [className]) }>
			<div className={ cls.overlay } onClick={ onClose }>
				<div className={ cls.content }>
					{children}
				</div>
			</div>
		</div>
	);
};