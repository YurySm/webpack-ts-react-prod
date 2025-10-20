import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useEffect } from 'react';
import { getUserInited, userActions } from '@/entities/User';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from './providers/router';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useAppSelector(getUserInited)

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={ classNames('app', {}, [theme]) }>
            <Navbar />
            <div className={ 'content-page' }>
                <Sidebar />
                {inited && <AppRouter />}
            </div>
        </div>
    );
};
