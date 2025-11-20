import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { HTMLAttributeAnchorTarget, useCallback } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { ArticleView } from '../../model/consts/consts';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
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
        view = ArticleView.SMALL,
        target,
    } = props;

    const { t } = useTranslation('articles');

    const renderArticle = useCallback((article: Article) => {
        return (
            <ArticleListItem
                target={ target }
                key={ article.id }
                article={ article }
                view={ view }
            />
        )
    }, [view])

    if(isLoading) {
        return (
            <div className={ classNames(cls.articleList, {}, [className, cls[view]]) }>
                {
                    isLoading && getSkeletons(view)
                }
            </div>
        );
    }

    if(!isLoading && !articles.length) {
        return (
            <div className={ classNames(cls.articleList, {}, [className, cls[view]]) }>
                <Text title={ t('Статьи не найдены') }/>
            </div>
        );
    }

    return (
        <div className={ classNames(cls.articleList, {}, [className, cls[view]]) } data-testid="ArticleList">
            {
                articles.length > 0 ?
                    articles.map(renderArticle) : null
            }
        </div>
    );
};