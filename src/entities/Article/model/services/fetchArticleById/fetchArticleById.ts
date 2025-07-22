import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
>('articleDetails/fetchArticleById', async (id, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
        if(!id) {
            throw new Error();
        }

        const response = await extra.api.get<Article>(`/articles/${id}`, {
            params: {
                _expand: 'user'
            }
        });

        if(!response.data) {
            throw new Error();
        }

        return response.data;
    } catch {
        return rejectWithValue('error');
    }
});
