import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/consts/consts';

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
                    <div className={ cls.header }>
                        <Skeleton width={ 30 } height={ 30 } borderRadius={ '50%' } className={ cls.avatar }/>
                        <Skeleton width={ 150 } height={ 16 }  className={ cls.username }/>
                        <Skeleton width={ 130 } height={ 16 }  className={ cls.data }/>
                    </div>

                    <Skeleton width={ 250 } height={ 24 }  className={ cls.title }/>
                    <Skeleton width={ 130 } height={ 16 } className={ cls.types }/>
                    <Skeleton height={ 250 } className={ cls.img }/>

                    <div className={ cls.footer }>
                        <Skeleton width={ 200 } height={ 40 }/>
                    </div>
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