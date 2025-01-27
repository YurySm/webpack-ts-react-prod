import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFountPage.module.scss';

interface NotFountPageProps {
    className?: string;
}

export const NotFountPage = ({ className }: NotFountPageProps) => {
	const { t } = useTranslation();
	return (
		<div className={ classNames(cls.notFountPage, {}, [className]) }>
			{t('Страница не найдена')}
		</div>
	);
};
