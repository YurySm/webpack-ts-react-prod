import { JSX, useMemo } from 'react';
import { useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getUserAuthData, getUserRoles, UserRole } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutesPaths } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children?: JSX.Element;
    roles?: UserRole[];
}


export const RequireAuth = ({ children, roles } :RequireAuthProps) => {
    const auth = useAppSelector(getUserAuthData)
    const location = useLocation();
    const userRoles = useAppSelector(getUserRoles)

    const hasRequireRoles = useMemo(() => {
        if(!roles) {
            return true
        }

        return roles.some(role => {
            return userRoles?.includes(role)
        })
    }, [roles, userRoles]);

    if(!auth) {
        return <Navigate to={ RoutesPaths.main } state={{ from: location }}  replace />;
    }

    if(!hasRequireRoles) {
        return <Navigate to={ RoutesPaths.forbidden } state={{ from: location }}  replace />;
    }

    return children;
};