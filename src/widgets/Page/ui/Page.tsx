import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { ReactNode, RefObject, UIEvent, useRef } from 'react';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getScrollSaveByPath, scrollSaveActions } from 'widgets/ScrollSave';
import { useLocation } from 'react-router-dom';
import { StateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

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

    const { pathname } = useLocation();

    const dispatch = useAppDispatch()
    const scrollPosition = useAppSelector((state: StateSchema) => getScrollSaveByPath(state, pathname))

    const triggerRef = useRef(null) as unknown as RefObject<HTMLDivElement>;
    const wrapperRef = useRef(null) as unknown  as RefObject<HTMLDivElement>;

    const onHandleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            path: pathname,
            position: e.currentTarget.scrollTop
        }))
    }, 500)

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    useInfinityScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    return (
        <section
            ref={ wrapperRef }
            className={ classNames(cls.page, {}, [className]) }
            onScroll={ onHandleScroll }
        >
            {children}
            <div ref={ triggerRef }/>
        </section>
    );
};