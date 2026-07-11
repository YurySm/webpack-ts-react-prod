import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailSlice';
import { memo } from 'react';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticlesDetailsError,
} from '../../model/selectors/articlesDetails';
import { useTranslation } from 'react-i18next';
import {
    Text as TextDeprecated,
    TextAlign,
    TextSize,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import { Avatar as AvatarDeprecared } from '@/shared/ui/deprecated/Avatar';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EaeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { renderArticleBlock } from './renderBlock';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
    const article = useAppSelector(getArticleDetailsData);

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    return (
        <>
            <AvatarDeprecared
                src={article?.img}
                size={200}
                className={cls.avatar}
            />

            <VStack gap={'4'} data-testid={'ArticleDetails.Info'}>
                <TextDeprecated
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />

                <HStack gap={'8'} className={cls.articleInfo}>
                    <IconDeprecated Svg={EaeIcon} />

                    <TextDeprecated text={article?.views.toString()} />
                </HStack>

                <HStack gap={'8'} className={cls.articleInfo}>
                    <IconDeprecated Svg={CalendarIcon} />

                    <TextDeprecated text={article?.createdAt} />
                </HStack>
            </VStack>

            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

const Redesigned = () => {
    const article = useAppSelector(getArticleDetailsData);

    return (
        <>
            <VStack gap={'16'} data-testid={'ArticleDetails.Info'}>
                <Text title={article?.title} size={'l'} bold />

                <Text title={article?.subtitle} size={'l'} />

                <AppImage
                    fallback={
                        <Skeleton
                            width={'100%'}
                            height={420}
                            borderRadius={'16px'}
                        />
                    }
                    src={article?.img}
                    className={cls.img}
                    // width={'100%'}
                    // height={420}
                />

                {/*<Avatar src={article?.img} size={200} className={cls.avatar} />*/}

                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={'l'}
                />

                <HStack gap={'8'} className={cls.articleInfo}>
                    <Icon Svg={EaeIcon} />

                    <Text text={article?.views.toString()} />
                </HStack>

                <HStack gap={'8'} className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} />

                    <Text text={article?.createdAt} />
                </HStack>
            </VStack>

            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;

    const { t } = useTranslation('articles');

    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(getArticleDetailsIsLoading);
    const error = useAppSelector(getArticlesDetailsError);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = (
            <VStack gap={'16'}>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    borderRadius={'50%'}
                />
                <Skeleton className={cls.title} width={400} height={35} />
                <Skeleton className={cls.skeleton} width={70} height={35} />
                <Skeleton
                    className={cls.skeleton}
                    width={'100%'}
                    height={250}
                />
                <Skeleton
                    className={cls.skeleton}
                    width={'100%'}
                    height={250}
                />
                <Skeleton
                    className={cls.skeleton}
                    width={'100%'}
                    height={250}
                />
            </VStack>
        );
    } else if (error) {
        content = (
            <>
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <Text
                            align={'center'}
                            title={t('Произошла ошибка при загрузке страницы')}
                            variant={'error'}
                        />
                    }
                    off={
                        <TextDeprecated
                            align={TextAlign.CENTER}
                            title={t('Произошла ошибка при загрузке страницы')}
                            theme={TextTheme.ERROR}
                        />
                    }
                />
            </>
        );
    } else {
        content = (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<Redesigned />}
                off={<Deprecated />}
            />
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.articleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});

ArticleDetails.displayName = 'ArticleDetails';
