import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';
import {
    fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

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
    extraReducers: builder => {
        builder.addCase(fetchCommentsByArticleId.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
            state.isLoading = false;
            commentsAdapter.setAll(state, action.payload)
        });
        builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
})


export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
