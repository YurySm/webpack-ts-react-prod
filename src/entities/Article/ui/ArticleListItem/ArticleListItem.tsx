import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { useEffect } from 'react';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
    } = props;

    const [isHover, bindHover] = useHover()

    if (view === ArticleView.BIG) {
        return (
            <div className={ classNames(cls.articleListItem, {}, [className, cls[view]]) }>
                {article.title}
            </div>
        );
    }

    return (
        <div { ...bindHover } className={ classNames(cls.articlelistitem, {}, [className, cls[view]]) }>
            <Card>
                <div className={ cls.imgWrapp }>
                    <img src={ article.img } alt={ article.title } className={ cls.img }/>
                    <Text text={ article.createdAt } className={ cls.date }/>
                </div>

                <div className={ cls.infoWrapp }>
                    <Text text={ article.type.join(', ') } className={ cls.types }/>
                    <Text text={ String(article.views) } className={ cls.views }/>
                    <Icon Svg={ EyeIcon }/>
                </div>

                <Text text={ article.title } className={ cls.title }/>
            </Card>
        </div>
    );
};