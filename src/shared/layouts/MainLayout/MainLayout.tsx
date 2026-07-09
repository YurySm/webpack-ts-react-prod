import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';
import { ReactNode } from 'react';

interface MainLayoutProps {
    className?: string;
    header: ReactNode;
    content: ReactNode;
    sidebar: ReactNode;
    toolbar?: ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
    const { className, content, header, sidebar, toolbar } = props;
    return (
        <div className={classNames(cls.mainlayout, {}, [className])} id={'app'}>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.content}>{content}</div>
            <div className={cls.rightbar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
};
