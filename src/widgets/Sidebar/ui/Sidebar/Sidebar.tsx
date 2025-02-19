import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

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
				{
					SidebarItemList.map(item => (
						<SidebarItem
							key={ item.path }
							item={ item }
							collapsed={ collapsed }
						/>
					))
				}
			</div>

			<div className={ cls.switchers }>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};