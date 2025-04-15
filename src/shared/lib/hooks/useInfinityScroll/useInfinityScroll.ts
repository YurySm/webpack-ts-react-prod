import { RefObject, useEffect } from 'react';

export interface UseInfinityScrollProps {
    callback?: () => void;
    triggerRef:  RefObject<HTMLDivElement>
    wrapperRef: RefObject<HTMLDivElement>
}

export const useInfinityScroll = ({ callback, triggerRef, wrapperRef }: UseInfinityScrollProps) => {

    useEffect(() => {
        const wrapperElement = wrapperRef.current
        const triggerElement = triggerRef.current

        let observer: IntersectionObserver | null = null

        if(callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if(entry.isIntersecting) {
                    callback()
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if(observer && triggerElement) {
                observer.unobserve(triggerElement);
            }
        }
    }, [triggerRef, wrapperRef, callback])
}