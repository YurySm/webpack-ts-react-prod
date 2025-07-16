import { rtkApi } from 'shared/api/rtkApi';

const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticlesRecommendationsList: build.query({
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
