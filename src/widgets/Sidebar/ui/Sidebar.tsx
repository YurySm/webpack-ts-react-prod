import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';
import { useTranslation } from 'react-i18next';

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
			{ }
			<button
				data-testid="toggle"
				onClick={ onToggle }
			>
				{t('Переключить')}
			</button>
			<div className={ cls.body }> 

			</div>

			<div className={ cls.switchers }>
				<ThemeSwitcher/> 
				<LangSwitcher/>
			</div>
		</div>
	);
};