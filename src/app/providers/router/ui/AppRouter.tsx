import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';


import { AppRouteProps } from '@/shared/types/router';
import { RequireAuth } from './RequireAuth';
import { routeConfig } from '../config/routeConfig';


const AppRouter = () => {

    const renderWithWrapper = useCallback((route: AppRouteProps) =>{
        const Element = (
            <Suspense
                fallback={ <PageLoader /> }
            >
                {route.element}
            </Suspense>
        )

        return (
            <Route
                key={ route.path }
                path={ route.path }
                element={ route.authOnly ? <RequireAuth roles={ route.roles }>{Element}</RequireAuth> : Element }
            />
        )
    }, [])

    return (
        <Routes>
            {
                Object.values(routeConfig).map(renderWithWrapper)
            }
        </Routes>
    );
};

export default memo(AppRouter);
