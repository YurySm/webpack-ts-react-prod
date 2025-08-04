import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useEffect } from 'react';
import { getUserInited, userActions } from '@/entities/User';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks';

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
