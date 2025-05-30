import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import {
    getArticlesPageLimit,
    getArticlesPageNumPage,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors/articlesPageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

export interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async ({ replace }, thunkAPI) => {
    const {
        extra,
        rejectWithValue,
        getState
    } = thunkAPI;

    // const {
    //     page = 1
    // } = args;

    const limit = getArticlesPageLimit(getState())
    const page = getArticlesPageNumPage(getState())
    const order = getArticlesPageOrder(getState())
    const sort = getArticlesPageSort(getState())
    const search = getArticlesPageSearch(getState())
    const type = getArticlesPageType(getState())

    try {
        addQueryParams({
            sort, order, type, search
        })
        const response = await extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                type: type === ArticleType.ALL ? undefined : type,
                q: search,
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
