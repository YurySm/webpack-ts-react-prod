import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticlesIcon from '@/shared/assets/icons/articles-20-20.svg';
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/constants/router';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'Главная',
                Icon: MainIcon,
            },
            {
                path: getRouteAbout(),
                text: 'О нас',
                Icon: AboutIcon,
            }
        ]

        if(userData) {
            sidebarItemList.push(
                {
                    path: getRouteProfile(userData.id),
                    text: 'Профиль',
                    Icon: ProfileIcon,
                    authOnly: true
                },
                {
                    path: getRouteArticles(),
                    text: 'Статьи',
                    Icon: ArticlesIcon,
                    authOnly: true
                }
            )
        }

        return sidebarItemList
    }
)