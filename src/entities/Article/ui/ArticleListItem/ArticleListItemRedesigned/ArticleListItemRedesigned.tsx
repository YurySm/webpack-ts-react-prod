import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemRedesigned.module.scss';
import { ArticleListItemProps } from '../ArticleListItem';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { ArticleView, ArticleBlockType } from '../../../model/consts/consts';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/shared/constants/router';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export const ArticleListItemRedesigned = (props: ArticleListItemProps) => {
    const { className, article, view, target } = props;

    const { t } = useTranslation('articles');

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <HStack gap={'8'} max={false}>
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} className={cls.views} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        );
        return (
            <Card
                padding={'24'}
                className={classNames(cls.articlelistitem, {}, [
                    className,
                    cls[view],
                ])}
                data-testid="ArticleListItem"
            >
                <VStack gap={'16'}>
                    <HStack gap={'8'}>
                        <Avatar
                            size={32}
                            src={article.user.avatar}
                            alt={article.user.username}
                        />
                        <Text text={article.user.username} bold />
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text title={article.title} bold />
                    <Text title={article.subtitle} size={'s'} />

                    <AppImage
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />

                    {textBlock?.paragraphs && (
                        <Text
                            className={cls.textBlock}
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                        />
                        // <ArticleTextBlockComponent
                        //     block={textBlock}
                        //     className={cls.textBlock}
                        // />
                    )}

                    <HStack justify={'between'} gap={'16'}>
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button variant={'outline'}>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>

                        {views}
                    </HStack>
                </VStack>
            </Card>
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
