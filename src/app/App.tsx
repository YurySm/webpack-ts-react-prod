import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { useEffect } from 'react';
import { userActions } from 'entities/User';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={ classNames('app', {}, [theme]) }>
            <Navbar />
            <div className={ 'content-page' }>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};
