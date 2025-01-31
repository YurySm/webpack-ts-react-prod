import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss'; 

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps ) => {
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
				onClick={ onToggle }>toggle</button>
			<div className={ cls.body }> 

			</div>

			<div className={ cls.switchers }>
				<ThemeSwitcher/> 
				<LangSwitcher/>
			</div>
		</div>
	);
};