import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const sidebarItemsList = useAppSelector(getSidebarItems)

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => (
        sidebarItemsList.map((item) => (
            <SidebarItem
                key={ item.path }
                item={ item }
                collapsed={ collapsed }
            />
        ))
    ), [collapsed, sidebarItemsList])

    return (
        <div
            data-testid="sidebar"
            className={ classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ]) }
        >
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
                {itemsList}
            </div>

            <div className={ cls.switchers }>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
});

Sidebar.displayName = 'Sidebar';
