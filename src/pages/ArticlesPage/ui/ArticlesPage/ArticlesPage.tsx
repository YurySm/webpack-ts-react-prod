import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
// import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const {
        className,
    } = props;

    // const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();

    const articles = useAppSelector(getArticles.selectAll)
    const isLoading = useAppSelector(getArticlesPageIsLoading)
    const error = useAppSelector(getArticlesPageError)
    const view = useAppSelector(getArticlesPageView)

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlesPageActions.initState())
    })

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <div className={ classNames(cls.ArticlesPage, {}, [className]) }>
                <ArticleViewSelector
                    view={ view }
                    onViewClick={ onChangeView }
                />

                <ArticleList
                    isLoading={ isLoading }
                    view={ view }
                    articles={ articles } />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);