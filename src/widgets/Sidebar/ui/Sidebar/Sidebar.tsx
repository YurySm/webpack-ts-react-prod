import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import cls from './Sidebar.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { useAppSelector } from '@/app/providers/StoreProvider/config/hooks';

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
        <aside
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

            <VStack
                gap={ '8' }
                className={ cls.items }>
                {itemsList}
            </VStack>

            <div className={ cls.switchers }>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </aside>
    );
});

Sidebar.displayName = 'Sidebar';
