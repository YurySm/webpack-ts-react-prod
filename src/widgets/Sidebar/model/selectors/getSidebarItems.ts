import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../types/sidebar';
import { RoutesPaths } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticlesIcon from 'shared/assets/icons/articles-20-20.svg';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemList: SidebarItemType[] = [
            {
                path: RoutesPaths.main,
                text: 'Главная',
                Icon: MainIcon,
            },
            {
                path: RoutesPaths.about,
                text: 'О нас',
                Icon: AboutIcon,
            }
        ]

        if(userData) {
            sidebarItemList.push(
                {
                    path: RoutesPaths.profile + userData.id,
                    text: 'Профиль',
                    Icon: ProfileIcon,
                    authOnly: true
                },
                {
                    path: RoutesPaths.articles,
                    text: 'Статьи',
                    Icon: ArticlesIcon,
                    authOnly: true
                }
            )
        }

        return sidebarItemList
    }
)