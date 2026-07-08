import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import { toggleFeatures } from '@/shared/lib/features';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = (
    props: ArticleListItemSkeletonProps,
) => {
    const { className, view } = props;

    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.articlelistitemredesigned,
        off: () => cls.articlelistitem,
    });

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    const Card = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => CardRedesigned,
        off: () => CardDeprecated,
    });

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(mainClass, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton
                            width={30}
                            height={30}
                            borderRadius={'50%'}
                            className={cls.avatar}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.username}
                        />
                        <Skeleton
                            width={130}
                            height={16}
                            className={cls.data}
                        />
                    </div>

                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton width={130} height={16} className={cls.types} />
                    <Skeleton height={250} className={cls.img} />

                    <div className={cls.footer}>
                        <Skeleton width={200} height={40} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imgWrapp}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>

                <div className={cls.infoWrapp}>
                    <Skeleton width={130} height={16} className={cls.types} />
                </div>

                <Skeleton width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
};
