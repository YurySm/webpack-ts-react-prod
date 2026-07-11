import { RatingCard } from '@/entities/Rating';
import {
    useGetArticleRatingQuery,
    useSetArticleRatingMutation,
} from '../../api/articleRatingApi';
import { useAppSelector } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '@/entities/User';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { useCallback } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = (props: ArticleRatingProps) => {
    const { className, articleId } = props;

    const userData = useAppSelector(getUserAuthData);

    const { data, isLoading, isFetching } = useGetArticleRatingQuery({
        articleId,
        userId: userData?.id ?? '',
    });

    const [setRating] = useSetArticleRatingMutation();

    const handleSetArticleRating = useCallback(
        (rate: number, feedback?: string) => {
            try {
                setRating({
                    rate,
                    articleId,
                    userId: userData?.id ?? '',
                    feedback,
                });
            } catch (error) {
                console.log(error);
            }
        },
        [articleId, setRating, userData?.id],
    );

    const onCancel = useCallback(
        (rate: number) => {
            handleSetArticleRating(rate);
        },
        [handleSetArticleRating],
    );

    const onAccept = useCallback(
        (rate: number, feedback?: string) => {
            handleSetArticleRating(rate, feedback);
        },
        [handleSetArticleRating],
    );

    if (isFetching || isLoading) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<SkeletonDeprecated width={'100%'} height={100} />}
                off={<Skeleton width={'100%'} height={100} />}
            />
        );
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            className={className}
            title={'Оцените статью'}
            feedbackTitle={'Оставьте отзыв'}
            hasFeedback
        />
    );
};

export default ArticleRating;
