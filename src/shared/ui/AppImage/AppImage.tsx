import { ImgHTMLAttributes, ReactElement, useLayoutEffect, useState } from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = (props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        width,
        height,
        fallback,
        errorFallback,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useLayoutEffect(() => {
        const image = new Image();
        image.src = src ?? '';
        image.onload = () => {
            setIsLoading(false);
        }

        image.onerror = () => {
            setIsLoading(false);
            setIsError(true);
        }
    }, [src])

    if(isLoading && fallback){
        return fallback
    }

    if(isError && errorFallback){
        return errorFallback
    }

    return (
        <img src={ src } alt={ alt } width={ width } height={ height } className={ className } { ...otherProps }/>
    );

};