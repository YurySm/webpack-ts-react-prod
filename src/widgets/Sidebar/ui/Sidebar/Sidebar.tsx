import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, ReactNode, useMemo, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { useAppSelector } from '@/app/providers/StoreProvider';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import cls from './Sidebar.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

interface SidebarProps {
    className?: string;
}

const DeprecatedSidebar = ({
    collapsed,
    className,
    onToggle,
    itemsList,
}: {
    collapsed: boolean;
    className?: string;
    onToggle: () => void;
    itemsList: ReactNode[];
}) => {
    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <VStack gap={'8'} className={cls.items}>
                {itemsList}
            </VStack>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </aside>
    );
};

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const sidebarItemsList = useAppSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.sidebar_redesigned,
                        { [cls.collapsed_redesigned]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo
                        className={cls.appLogo}
                        size={collapsed ? 30 : 50}
                    />

                    <VStack gap={'8'} className={cls.items}>
                        {itemsList}
                    </VStack>

                    <Icon
                        onClick={onToggle}
                        className={cls.collapseBtn}
                        Svg={ArrowIcon}
                        clickable
                    />

                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher />
                    </div>
                </aside>
            }
            off={
                <DeprecatedSidebar
                    collapsed={collapsed}
                    itemsList={itemsList}
                    onToggle={onToggle}
                    className={className}
                />
            }
        />
    );
});

Sidebar.displayName = 'Sidebar';
