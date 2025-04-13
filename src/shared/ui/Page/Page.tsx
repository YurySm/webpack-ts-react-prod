import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { ReactNode, RefObject, useRef } from 'react';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';

interface PageProps {
    className?: string;
    children?: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd
    } = props;

    const triggerRef = useRef(null) as unknown as RefObject<HTMLDivElement>;
    const wrapperRef = useRef(null) as unknown  as RefObject<HTMLDivElement>;

    useInfinityScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    return (
        <section ref={ wrapperRef } className={ classNames(cls.page, {}, [className]) }>
            {children}
            <div ref={ triggerRef }/>
        </section>
    );
};