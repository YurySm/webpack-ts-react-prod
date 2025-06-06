import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
// import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { Page } from 'widgets/Page/ui/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlecPageFileters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';

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

    const [searchParams] = useSearchParams()

    // const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();

    const articles = useAppSelector(getArticles.selectAll)
    const isLoading = useAppSelector(getArticlesPageIsLoading)
    const view = useAppSelector(getArticlesPageView)
    const error = useAppSelector(getArticlesPageError)


    const onLoadNextPart = useCallback(() => {
        if(__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage())
        }
    }, [dispatch])

    useInitialEffect(() => {
        if(__PROJECT__ !== 'storybook') {
            dispatch(initArticlesPage(searchParams));
        }
    })

    if(error ) {
        return <Text
            text={ 'Что-то пошло не так!' }
            align={ TextAlign.CENTER }
            theme={ TextTheme.ERROR }  />
    }

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount={ false }>
            <Page
                onScrollEnd={ onLoadNextPart }
                className={ classNames(cls.ArticlesPage, {}, [className]) }
            >

                <ArticlesPageFilters />

                <ArticleList
                    isLoading={ isLoading }
                    view={ view }
                    articles={ articles }
                    className={ cls.list }
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);