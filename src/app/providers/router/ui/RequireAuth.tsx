import { JSX } from 'react';
import { useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getUserAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutesPaths } from 'shared/config/routeConfig/routeConfig';


export const RequireAuth = ({ children } :{children: JSX.Element}) => {
    const auth = useAppSelector(getUserAuthData)
    const location = useLocation();

    if(!auth) {
        return <Navigate to={ RoutesPaths.main } state={{ from: location }}  replace />;
    }

    return children;
};