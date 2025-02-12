import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from '../../model/selectors/getLoginState';
import { useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { username, password } = useSelector(getLoginState);

	const changeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const changePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	return (
		<div className={ classNames(cls.loginForm, {}, [className]) }>
			<Input
				onChange={ changeUsername }
				autofocus
				placeholder={ t('Логин') }
				value={ username }
			/>
			<Input
				onChange={ changePassword }
				placeholder={ t('Пароль') }
				value={ password }
			/>
			<Button>
				{t('Войти')}
			</Button>
		</div>
	);
};
 