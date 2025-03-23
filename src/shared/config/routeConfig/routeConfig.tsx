import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found',
}

export const RoutesPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // +id
    [AppRoutes.PROFILE]: '/profile',
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
    [AppRoutes.PROFILE]: {
        path: RoutesPaths.profile,
        element: <ProfilePage />,
        authOnly: true
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutesPaths.not_found,
        element: <NotFoundPage />,
    },
};
