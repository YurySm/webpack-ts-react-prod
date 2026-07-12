import { matchPath, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppRouteByPathPattern, AppRoutes } from '@/shared/constants/router';

export function useRouterChange() {
    const location = useLocation();

    const [appRouter, setAppRouter] = useState<AppRoutes>(AppRoutes.MAIN);

    useEffect(() => {
        Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
            if (matchPath(pattern, location.pathname)) {
                setAppRouter(route);
            }
        });
    }, [location.pathname]);

    return appRouter;
}
