import { ArticleList } from 'entities/Article';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/hooks';

interface ArticlesInfinityListProps {
    searchParams: URLSearchParams
    className?: string
}

export const ArticlesInfinityList = (props: ArticlesInfinityListProps) => {
    const {
        className,
        searchParams
    } = props;

    const dispatch = useAppDispatch();

    const articles = useAppSelector(getArticles.selectAll)
    const isLoading = useAppSelector(getArticlesPageIsLoading)
    const view = useAppSelector(getArticlesPageView)
    const error = useAppSelector(getArticlesPageError)

    useInitialEffect(() => {
        if(__PROJECT__ !== 'storybook') {
            dispatch(initArticlesPage(searchParams));
        }
    })

    if(error ) {
        return <Text
            className={ className }
            text={ 'Что-то пошло не так!' }
            align={ TextAlign.CENTER }
            theme={ TextTheme.ERROR }  />
    }

    return (
        <ArticleList
            className={ className }
            isLoading={ isLoading }
            view={ view }
            articles={ articles }
        />
    );
};