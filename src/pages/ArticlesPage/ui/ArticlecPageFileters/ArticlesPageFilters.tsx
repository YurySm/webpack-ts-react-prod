import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';
import { ArticleView, ArticleViewSelector } from 'entities/Article';
import { useCallback } from 'react';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getArticlesPageView } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';

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

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
    }, [dispatch])

    return (
        <div className={ classNames(cls.articlespagefilters, {}, [className]) }>
            <div className={ cls.sortWrapper }>
                {/*<ArticleSortSelector/>*/}

                <ArticleViewSelector
                    view={ view }
                    onViewClick={ onChangeView }
                />
            </div>
            <Card className={ cls.search }>
                <Input placeholder={ t('Поиск') }/>
            </Card>
        </div>
    );
};