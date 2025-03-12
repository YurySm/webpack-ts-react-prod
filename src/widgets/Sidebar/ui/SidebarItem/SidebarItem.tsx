import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getUserAuthData } from 'entities/User';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useAppSelector(getUserAuthData)

    if(item.authOnly && !isAuth) {
        return null
    }

    return (
        <AppLink
            theme={ AppLinkTheme.SECONDARY }
            to={ item.path }
            className={ classNames(cls.link, { [cls.collapsed]: collapsed }, []) }
        >
            <item.Icon className={ cls.icon } />
            <span className={ cls.linkText }>{t(item.text)}</span>
        </AppLink>
    );
});

SidebarItem.displayName = 'SidebarItem';
