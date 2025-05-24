import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import {
    articleDetailsRecommendationsReducer
} from './articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer
})