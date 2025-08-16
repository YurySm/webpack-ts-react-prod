import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface GetArticleRatingArgs {
    userId: string;
    articleId: string;
}

interface SetArticleRatingArgs {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], GetArticleRatingArgs>({
            query: ({ userId, articleId }) => ({
                url: '/articles-ratings',
                params: {
                    userId,
                    articleId
                }
            })
        }),
        setArticleRating: build.mutation<void, SetArticleRatingArgs>({
            query: (arg) => ({
                url: '/articles-ratings',
                method: 'post',
                body: arg
            }),
        }),
    })
})

export const { useGetArticleRatingQuery, useSetArticleRatingMutation } = articleRatingApi
