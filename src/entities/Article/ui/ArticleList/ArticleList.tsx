import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { useCallback } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
    return (
        new Array(view === ArticleView.BIG ? 3 : 9)
            .fill(0)
            .map((_, index) => (
                <ArticleListItemSkeleton
                    view={ view }
                    key={ index } />
            ))
    )
}

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL
    } = props;

    const renderArticle = useCallback((article: Article) => {
        return (
            <ArticleListItem
                key={ article.id }
                article={ article }
                view={ view }
            />
        )
    }, [view])

    return (
        <div className={ classNames(cls.articleList, {}, [className, cls[view]]) }>
            {
                articles.length > 0 ?
                    articles.map(renderArticle) : null
            }
            {
                isLoading && getSkeletons(view)
            }
        </div>
    );
};