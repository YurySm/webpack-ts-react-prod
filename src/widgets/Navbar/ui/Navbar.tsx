import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation()

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const onToggleOpen = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	return (
		<div className={ classNames(cls.navbar, {}, [className]) }>
			<div className={ cls.links }>
				<Button
					theme={ ButtonTheme.CLEAR_INVERTED }
					type="button"
					onClick={ onToggleOpen }
				>
					{t('Войти')}
				</Button>
				{/* eslint-disable-next-line i18next/no-literal-string */}
				<Modal isOpen={ isOpen } onClose={ onToggleOpen }>
					Lorem ipsum dolor sit amet, consectetur adipisicing
					elit. Culpa est modi porro? Accusantium ad aspernatur culpa
					ea eveniet facere fuga laboriosam minus quam, qui reprehenderit,
					repudiandae soluta suscipit tempora voluptatum.
				</Modal>
			</div>
		</div>
	);
};
