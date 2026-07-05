import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';
import { ReactNode } from 'react';

interface StickyContentLayoutProps {
    className?: string;
    left?: ReactNode;
    content: ReactNode;
    right?: ReactNode;
}

export const StickyContentLayout = (props: StickyContentLayoutProps) => {
    const { className, content, left, right } = props;
    return (
        <div className={classNames(cls.stickycontentlayout, {}, [className])}>
            {left && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {right && <div className={cls.right}>{right}</div>}
        </div>
    );
};
