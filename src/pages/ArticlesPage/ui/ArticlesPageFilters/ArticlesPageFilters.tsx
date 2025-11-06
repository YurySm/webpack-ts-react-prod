import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';
import {
    ArticleSortField,
    ArticleType,
    ArticleView,
} from '@/entities/Article';
import { useCallback } from 'react';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { SortOrder } from '@/shared/types/sort';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useThrottle/useDebounce';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const view = useAppSelector(getArticlesPageView)
    const order = useAppSelector(getArticlesPageOrder)
    const sort = useAppSelector(getArticlesPageSort)
    const search = useAppSelector(getArticlesPageSearch)
    const type = useAppSelector(getArticlesPageType)

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(articlesPageActions.setSearch(newSearch))
        dispatch(articlesPageActions.setPage(1))
        debouncedFetchData()
    }, [dispatch, debouncedFetchData])

    const onChangeType = useCallback((type: ArticleType) => {
        dispatch(articlesPageActions.setType(type));
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])


    return (
        <div className={ classNames(cls.articlespagefilters, {}, [className]) }>
            <div className={ cls.sortWrapper }>
                <ArticleSortSelector
                    sort={ sort }
                    order={ order }
                    onChangeSort={ onChangeSort }
                    onChangeOrder={ onChangeOrder }
                />

                <ArticleViewSelector
                    view={ view }
                    onViewClick={ onChangeView }
                />
            </div>

            <Card className={ cls.search }>
                <Input
                    value={ search }
                    onChange={ onChangeSearch }
                    placeholder={ t('Поиск') }/>
            </Card>

            <ArticleTypeTabs
                type={ type }
                onChangeType={ onChangeType }
                className={ cls.tabs }
            />
        </div>
    );
};