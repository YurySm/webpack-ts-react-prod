import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../ArticleListItem.module.scss';
import { ArticleListItemProps } from '../ArticleListItem';
import { Text } from '@/shared/ui/deprecated/Text';
import { Icon } from '@/shared/ui/deprecated/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useTranslation } from 'react-i18next';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleDetails } from '@/shared/constants/router';
import { AppImage } from '@/shared/ui/deprecated/AppImage';
import { ArticleView, ArticleBlockType } from '../../../model/consts/consts';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';

export const ArticleListItemDeprecated = (props: ArticleListItemProps) => {
    const { className, article, view, target } = props;

    const { t } = useTranslation('articles');

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    // const img = <img src={ article.img } alt={ article.title } className={ cls.img } />

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        );
        return (
            <div
                className={classNames(cls.articlelistitem, {}, [
                    className,
                    cls[view],
                ])}
                data-testid="ArticleListItem"
            >
                <Card>
                    <div className={cls.header}>
                        <Avatar
                            size={30}
                            src={article.user.avatar}
                            alt={article.user.username}
                        />
                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />
                        <Text text={article.createdAt} className={cls.data} />
                    </div>
                    <Text title={article.title} className={cls.title} />

                    {types}
                    {/*{img}*/}

                    <AppImage
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />

                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>

                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.articlelistitem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card>
                <div className={cls.imgWrapp}>
                    {/*{img}*/}
                    <AppImage
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>

                <div className={cls.infoWrapp}>
                    {types}
                    {views}
                </div>

                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
};
