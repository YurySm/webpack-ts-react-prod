import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { Counter } from 'entities/Counter';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation()

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const onClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	const onOpen = useCallback(() => {
		setIsOpen(true);
	}, []);


	return (
		<div className={ classNames(cls.navbar, {}, [className]) }>
			<div className={ cls.links }>
				<Button
					theme={ ButtonTheme.CLEAR_INVERTED }
					type="button"
					onClick={ onOpen }
				>
					{t('Войти')}
				</Button>
				<LoginModal
					isOpen={ isOpen }
					onClose={ onClose }
				/>
			</div>
		</div>
	);
};
