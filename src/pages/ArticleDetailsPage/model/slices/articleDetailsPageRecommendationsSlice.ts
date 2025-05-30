import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    ArticleDetailsPageRecommendationsSchema,
} from '../types/articleDetailsPageRecommendationsSchema';
import { Article } from 'entities/Article';
import {
    fetchArticleRecommendations
} from '../services/fetchArticleRecommendations/fetchArticleRecomendations';

const recommendationsAdapter = createEntityAdapter({
    selectId: (article: Article ) => article.id,
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    state => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
);

export const articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendations',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchArticleRecommendations.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
            state.isLoading = false;
            recommendationsAdapter.setAll(state, action.payload)
        });
        builder.addCase(fetchArticleRecommendations.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
})


export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
