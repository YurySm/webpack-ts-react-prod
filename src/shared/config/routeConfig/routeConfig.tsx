import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
}

export const RoutesPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/',
    [AppRoutes.ARTICLE_CREATE]: '/articles/create',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutesPaths.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutesPaths.about,
        element: <AboutPage />,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutesPaths.articles,
        element: <ArticlesPage />,
        authOnly: true
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutesPaths.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: `${RoutesPaths.article_create}`,
        element: <ArticleEditPage />,
        authOnly: true
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: `${RoutesPaths.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutesPaths.profile}:id`,
        element: <ProfilePage />,
        authOnly: true
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: `${RoutesPaths.admin_panel}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN]
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutesPaths.forbidden,
        element: <ForbiddenPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutesPaths.not_found,
        element: <NotFoundPage />,
    },
};
