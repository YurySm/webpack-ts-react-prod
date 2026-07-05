import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../selectors/articlesPageSelectors';
import { useCallback } from 'react';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { SortOrder } from '@/shared/types/sort';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useThrottle/useDebounce';

export function useArticlesFilters() {
    const dispatch = useAppDispatch();

    const order = useAppSelector(getArticlesPageOrder);
    const sort = useAppSelector(getArticlesPageSort);
    const search = useAppSelector(getArticlesPageSearch);
    const type = useAppSelector(getArticlesPageType);
    const view = useAppSelector(getArticlesPageView);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
            dispatch(articlesPageActions.setPage(1));
        },
        [dispatch],
    );

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(newSort));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlesPageActions.setOrder(newOrder));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSearch = useCallback(
        (newSearch: string) => {
            dispatch(articlesPageActions.setSearch(newSearch));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );

    const onChangeType = useCallback(
        (type: ArticleType) => {
            dispatch(articlesPageActions.setType(type));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return {
        order,
        sort,
        search,
        type,
        view,
        onChangeView,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeType,
    };
}
