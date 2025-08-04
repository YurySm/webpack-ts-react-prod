import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';
import {
    fetchCommentsByArticleId
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkAPI) => {
    const { extra, rejectWithValue, dispatch, getState } = thunkAPI;

    const user = getUserAuthData(getState())
    const article = getArticleDetailsData(getState())

    if(!user || !article || !text) {
        return rejectWithValue('error')
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId: article.id,
            userId: user.id,
            text
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByArticleId(article.id))

        return response.data;
    } catch {
        return rejectWithValue('error');
    }
});
