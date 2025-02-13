import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
// import { useSelector } from 'react-redux';
import { getLoginState } from '../../model/selectors/getLoginState';
import { useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const {
		username,
		password,
		isLoading,
		error,
	} = useAppSelector(getLoginState);

	const changeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const changePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	const onLoginClick =  useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, password, username]);

	return (
		<div className={ classNames(cls.loginForm, {}, [className]) }>
			{error && <div>{error}</div>}

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
			<Button
				disabled={ isLoading }
				onClick={ onLoginClick }
			>
				{t('Войти')}
			</Button>
		</div>
	);
};
 