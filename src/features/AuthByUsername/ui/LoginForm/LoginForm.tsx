import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../..//model/selectors/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer
}

const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();

	const dispatch = useAppDispatch();

	const username = useAppSelector(getLoginUsername)
	const password = useAppSelector(getLoginPassword)
	const error = useAppSelector(getLoginError)
	const isLoading = useAppSelector(getLoginIsLoading)

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
		<DynamicModuleLoader reducers={ initialReducers }>
			<div className={ classNames(cls.loginForm, {}, [className]) }>
				<Text title={ t('Авторизация') } />

				{error && <Text text={ t('Вы ввели неверный логин или пароль') } theme={ TextTheme.ERROR } />}
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
		</DynamicModuleLoader>

	);
};

export default LoginForm;
 