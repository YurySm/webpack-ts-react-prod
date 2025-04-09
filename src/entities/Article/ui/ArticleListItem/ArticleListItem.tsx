import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation('articles');

    const [isHover, bindHover] = useHover()

    const types = <Text text={ article.type.join(', ') } className={ cls.types } />
    const views = (
        <>
            <Text text={ String(article.views) } className={ cls.views } />
            <Icon Svg={ EyeIcon } />
        </>
    )
    const img = <img src={ article.img } alt={ article.title } className={ cls.img } />


    if (view === ArticleView.BIG) {
        return (
            <div { ...bindHover } className={ classNames(cls.articlelistitem, {}, [className, cls[view]]) }>
                <Card>
                    <div className={ cls.header }>
                        <Avatar size={ 30 } src={ article.user.avatar } alt={ article.user.username } />
                        <Text text={ article.user.username } className={ cls.username } />
                        <Text text={ article.createdAt } className={ cls.data } />
                    </div>
                    <Text title={ article.title } className={ cls.title } />
                    {types}

                    {img}
                    <div className={ cls.footer }>
                        <Button
                            theme={ ButtonTheme.OUTLINE }
                        >
                            {t('Читать далее...')}
                        </Button>

                        {/*<div className={ cls.views }>*/}
                        {views}
                        {/*</div>*/}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div { ...bindHover } className={ classNames(cls.articlelistitem, {}, [className, cls[view]]) }>
            <Card>
                <div className={ cls.imgWrapp }>
                    {img}
                    <Text text={ article.createdAt } className={ cls.date } />
                </div>

                <div className={ cls.infoWrapp }>
                    {types}
                    {views}
                </div>

                <Text text={ article.title } className={ cls.title } />
            </Card>
        </div>
    );
};