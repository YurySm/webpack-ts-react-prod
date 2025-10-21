import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton';

const ArticleRatingLazyImport = lazy(() => import('./ArticleRating'));

export const ArticleRatingLazy = (props:ArticleRatingProps) => {
    return (
        <Suspense fallback={  <Skeleton width={ '100%' } height={ 100 }/> }>
            <ArticleRatingLazyImport { ...props }/>
        </Suspense>
    )
}