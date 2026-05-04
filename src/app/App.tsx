import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useEffect } from 'react';
import { getUserInited, initAuthData } from '@/entities/User';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from './providers/router';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useAppSelector(getUserInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) return <PageLoader />;

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <div className={classNames('app_redesigned', {}, [theme])}>
                    <MainLayout
                        sidebar={<Sidebar />}
                        content={<AppRouter />}
                        header={<Navbar />}
                        toolbar={<div>+</div>}
                    />
                </div>
            }
            off={
                <div className={classNames('app', {}, [theme])}>
                    <Navbar />
                    <div className={'content-page'}>
                        <Sidebar />
                        <AppRouter />
                    </div>
                </div>
            }
        />
    );
};
