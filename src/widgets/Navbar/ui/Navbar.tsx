import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation('about')

	return (
		<div className={ classNames(cls.navbar, {}, [className]) }>
			<div className={ cls.links }>
				<AppLink
					theme={ AppLinkTheme.SECONDARY }
					to={ '/' }
				>
					{t('Главная')}
				</AppLink>

				<AppLink
					theme={ AppLinkTheme.SECONDARY }
					to={ '/about' }
				>
					{t('О сайте')}
				</AppLink>
			</div>
		</div>
	);
};
