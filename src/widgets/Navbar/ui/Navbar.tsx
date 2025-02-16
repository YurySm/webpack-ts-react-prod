import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { Counter } from 'entities/Counter';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);
	const dispatch = useAppDispatch();

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	if (authData) {
		return (
			<div className={ classNames(cls.navbar, {}, [className]) }>
				<div className={ cls.links }>
					<Button
						theme={ ButtonTheme.CLEAR_INVERTED }
						type="button"
						onClick={ onLogout }
					>
						{t('Выйти')}
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className={ classNames(cls.navbar, {}, [className]) }>
			<div className={ cls.links }>
				<Button
					theme={ ButtonTheme.CLEAR_INVERTED }
					type="button"
					onClick={ onShowModal }
				>
					{t('Войти')}
				</Button>

				{isAuthModal && (
					<LoginModal
						isOpen={ isAuthModal }
						onClose={ onCloseModal }
					/>
				)}
			</div>
		</div>
	);
};
