import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	return (
		<div className={ classNames(cls.loginForm, {}, [className]) }>
			<Input autofocus placeholder={ t('Логин') } />
			<Input placeholder={ t('Пароль') }  />
			<Button>
				{t('Войти')}
			</Button>
		</div>
	);
};
 