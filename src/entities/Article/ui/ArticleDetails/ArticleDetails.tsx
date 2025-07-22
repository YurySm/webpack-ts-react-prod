import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailSlice';
import { memo, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticlesDetailsError,
} from '../../model/selectors/articlesDetails';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EaeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from 'shared/ui/Stack/VStack/VStack';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {
        className,
        id
    } = props;

    const { t } = useTranslation('articles')

    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(getArticleDetailsIsLoading)
    const error = useAppSelector(getArticlesDetailsError)
    const article = useAppSelector(getArticleDetailsData)

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    })

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={ block.id }
                    block={ block }
                />
            )
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={ block.id }
                    block={ block }
                />
            )
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={ block.id }
                    block={ block }
                />
            )
        default:
            return null;
        }
    }, [])

    let content

    if(isLoading) {
        content = (
            <>
                <Skeleton
                    className={ cls.avatar }
                    width={ 200 }
                    height={ 200 }
                    borderRadius={ '50%' }
                />
                <Skeleton
                    className={ cls.title }
                    width={ 400 }
                    height={ 35 }
                />
                <Skeleton
                    className={ cls.skeleton }
                    width={ 70 }
                    height={ 35 }
                />
                <Skeleton
                    className={ cls.skeleton }
                    width={ '100%' }
                    height={ 250 }
                />
                <Skeleton
                    className={ cls.skeleton }
                    width={ '100%' }
                    height={ 250 }
                />
                <Skeleton
                    className={ cls.skeleton }
                    width={ '100%' }
                    height={ 250 }
                />
            </>
        )
    } else if(error) {
        content = (
            <>
                <Text
                    align={ TextAlign.CENTER }
                    title={ t('Произошла ошибка при загрузке страницы') }
                    theme={ TextTheme.ERROR }
                />
            </>
        )
    } else  {
        content = (
            <>
                <Avatar
                    src={ article?.img }
                    size={ 200 }
                    className={ cls.avatar }
                />

                <Text
                    className={ cls.title }
                    title={ article?.title }
                    text={ article?.subtitle }
                    size={ TextSize.L }
                />

                <VStack
                    gap={ '8' }
                    className={ cls.articleInfo }
                >
                    <Icon Svg={ EaeIcon }/>

                    <Text
                        text={ article?.views.toString() }
                    />
                </VStack>

                <VStack
                    gap={ '8' }
                    className={ cls.articleInfo }
                >
                    <Icon Svg={ CalendarIcon }/>

                    <Text
                        text={ article?.createdAt }
                    />
                </VStack>

                {article?.blocks.map(renderBlock)}
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <div className={ classNames(cls.articleDetails, {}, [className]) }>
                {content}
            </div>
        </DynamicModuleLoader>
    );
})

ArticleDetails.displayName = 'ArticleDetails';