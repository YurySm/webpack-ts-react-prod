import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutesPaths } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { Modal } from 'shared/ui/Modal';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps ) => {
	const { t } = useTranslation();

	const [collapsed, setCollapsed] = useState<boolean>(false)

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div
			data-testid="sidebar"
			className={ classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className]) }>
			<Button
				data-testid="toggle"
				type="button"
				onClick={ onToggle }
				className={ cls.collapseBtn }
				theme={ ButtonTheme.BACKGROUND_INVERTED }
				square
				size={ ButtonSize.L }
			>
				{collapsed ? '>' : '<'}
			</Button>

			<div className={ cls.items }>
				<AppLink
					theme={ AppLinkTheme.SECONDARY }
					to={ RoutesPaths.main }
					className={ cls.link }
				>
					<MainIcon className={ cls.icon } />
					<span className={ cls.linkText }>
						{t('Главная')}
					</span>
				</AppLink>

				<AppLink
					theme={ AppLinkTheme.SECONDARY }
					to={ RoutesPaths.about }
					className={ cls.link }
				>
					<AboutIcon className={ cls.icon } />
					<span className={ cls.linkText }>
						{t('О нас')}
					</span>
				</AppLink>
			</div>

			<div className={ cls.switchers }>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};