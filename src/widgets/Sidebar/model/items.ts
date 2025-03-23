import { FC, SVGProps } from 'react';
import { RoutesPaths } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticlesIcon from 'shared/assets/icons/articles-20-20.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: FC<SVGProps<SVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutesPaths.main,
        text: 'Главная',
        Icon: MainIcon,
    },
    {
        path: RoutesPaths.about,
        text: 'О нас',
        Icon: AboutIcon,
    },
    {
        path: RoutesPaths.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true
    },
    {
        path: RoutesPaths.articles,
        text: 'Статьи',
        Icon: ArticlesIcon,
        authOnly: true
    },
];
