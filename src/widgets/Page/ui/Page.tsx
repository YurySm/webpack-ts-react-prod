import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { ReactNode, RefObject, UIEvent, useRef } from 'react';
import { useInfinityScroll } from '@/shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import { getScrollSaveByPath, scrollSaveActions } from '@/widgets/ScrollSave';
import { useLocation } from 'react-router-dom';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useDebounce } from '@/shared/lib/hooks/useThrottle/useDebounce';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks';

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

    const onHandleScroll = (e: UIEvent<HTMLDivElement>) => {
        const scrollTop = e.currentTarget?.scrollTop;
        if (scrollTop === undefined) return;

        debouncedScrollHandler(scrollTop);
    };

    const debouncedScrollHandler = useDebounce((scrollTop: number) => {
        dispatch(scrollSaveActions.setScrollPosition({
            path: pathname,
            position: scrollTop,
        }));
    }, 500);

    useInitialEffect(() => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollTop = scrollPosition;
        }
    })

    useInfinityScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    return (
        <main
            ref={ wrapperRef }
            className={ classNames(cls.page, {}, [className]) }
            onScroll={ onHandleScroll }
        >
            {children}
            {onScrollEnd && <div className={ cls.trigger } ref={ triggerRef } />}
        </main>
    );
};