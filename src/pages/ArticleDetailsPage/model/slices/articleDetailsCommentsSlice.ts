import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter({
    selectId: (comment: Comment ) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    state => state.articleDetailsComments || commentsAdapter.getInitialState()
);

export const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
})


export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
