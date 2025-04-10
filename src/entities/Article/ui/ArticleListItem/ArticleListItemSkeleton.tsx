import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/article';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
    const {
        className,
        view,
    } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={ classNames(cls.articlelistitem, {}, [className, cls[view]]) }>
                <Card>
                    {/*<div className={ cls.header }>*/}
                    {/*    <Avatar size={ 30 } src={ article.user.avatar } alt={ article.user.username } />*/}
                    {/*    <Text text={ article.user.username } className={ cls.username } />*/}
                    {/*    <Text text={ article.createdAt } className={ cls.data } />*/}
                    {/*</div>*/}
                    {/*<Text title={ article.title } className={ cls.title } />*/}

                    {/*{types}*/}
                    {/*{img}*/}
                    {/*{*/}
                    {/*    textBlock &&*/}
                    {/*    <ArticleTextBlockComponent block={ textBlock } className={ cls.textBlock }/>*/}
                    {/*}*/}
                    {/*<div className={ cls.footer }>*/}
                    {/*    <Button*/}
                    {/*        theme={ ButtonTheme.OUTLINE }*/}
                    {/*        onClick={ onOpenArticle }*/}
                    {/*    >*/}
                    {/*    </Button>*/}

                    {/*</div>*/}
                </Card>
            </div>
        );
    }

    return (
        <div className={ classNames(cls.articlelistitem, {}, [className, cls[view]]) }>
            <Card>
                <div className={ cls.imgWrapp }>
                    <Skeleton width={ 200 } height={ 200 } className={ cls.img }/>
                </div>

                <div className={ cls.infoWrapp }>
                    <Skeleton width={ 130 } height={ 16 } className={ cls.types }/>
                </div>

                <Skeleton width={ 150 } height={ 16 } className={ cls.title }/>
            </Card>
        </div>
    );
};