import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';
import MainIconDeprecated from '@/shared/assets/icons/main-20-20.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about-20-20.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20-20.svg';
import ArticlesIconDeprecated from '@/shared/assets/icons/article-20-20.svg';

import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import ArticlesIcon from '@/shared/assets/icons/article.svg';

import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/constants/router';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Главная',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => MainIcon,
                off: () => MainIconDeprecated,
            }),
        },
        {
            path: getRouteAbout(),
            text: 'О нас',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => AboutIcon,
                off: () => AboutIconDeprecated,
            }),
        },
    ];

    if (userData) {
        sidebarItemList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Профиль',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ProfileIcon,
                    off: () => ProfileIconDeprecated,
                }),
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: 'Статьи',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ArticlesIcon,
                    off: () => ArticlesIconDeprecated,
                }),
                authOnly: true,
            },
        );
    }

    return sidebarItemList;
});
