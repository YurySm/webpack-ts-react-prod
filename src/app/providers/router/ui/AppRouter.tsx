import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
    const isAuth = useAppSelector(getUserAuthData)

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(r => {
            if(r.authOnly && !isAuth) return false
            return true
        })
    }, [isAuth])

    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route
                    key={ path }
                    path={ path }
                    element={
                        <Suspense fallback={ <PageLoader /> }>{element}</Suspense>
                    }
                />
            ))}
        </Routes>
    );
};

export default memo(AppRouter);
