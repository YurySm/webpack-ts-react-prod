import { rtkApi } from 'shared/api/rtkApi';
import { Article } from 'entities/Article';

const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticlesRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit
                }
            }),
        }),
    })
})

export const { useGetArticlesRecommendationsListQuery } = articleRecommendationsApi
