import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { SortOrder } from '@/shared/types';
import { ArticleSortField, ArticleType } from '@/entities/Article';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkAPI) => {
    const {
        getState,
        dispatch
    } = thunkAPI;

    const inited = getArticlesPageInited(getState())

    if(!inited) {
        const orderFromUrl = searchParams.get('order')
        const sortFromUrl = searchParams.get('sort')
        const searchFromUrl = searchParams.get('search')
        const typeFromUrl = searchParams.get('type')

        if(orderFromUrl){
            dispatch(articlesPageActions.setOrder(orderFromUrl as  SortOrder))
        }

        if(sortFromUrl){
            dispatch(articlesPageActions.setSort(sortFromUrl as  ArticleSortField))
        }

        if(searchFromUrl){
            dispatch(articlesPageActions.setSearch(searchFromUrl))
        }

        if(typeFromUrl){
            dispatch(articlesPageActions.setType(typeFromUrl as ArticleType))
        }

        dispatch(articlesPageActions.initState())
        dispatch(fetchArticlesList({}));
    }
});
