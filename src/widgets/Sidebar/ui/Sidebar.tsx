import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
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
		<div className={ classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className]) }>
			<button onClick={ onToggle }>toggle</button>
			<div className={ cls.body }> 

			</div>

			<div className={ cls.switchers }>
				<ThemeSwitcher/> 
				<LangSwitcher/>
			</div>
		</div>
	);
};