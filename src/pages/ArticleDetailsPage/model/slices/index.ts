import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import {
    articleDetailsRecommendationsReducer
} from './articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer
})