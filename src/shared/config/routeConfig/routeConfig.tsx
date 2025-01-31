import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFountPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
	NOT_FOUND = 'not_found',
}

export const RoutesPaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutesPaths.main,
		element: <MainPage/>
	},
	[AppRoutes.ABOUT]: {
		path: RoutesPaths.about,
		element: <AboutPage/>
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutesPaths.not_found,
		element: <NotFountPage />,
	},
}