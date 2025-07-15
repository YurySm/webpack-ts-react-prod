import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Page } from 'widgets/Page/ui/Page';
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleDetailsRecommendationsIsLoading } from '../../model/selectors/recommendations';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecomendations';
import { articleDetailsPageReducer } from '../../model/slices';
import {
    ArticleDetailsPageHeader,
} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticlesRecommendationsList } from 'features/ArticlesRecommendationsList';

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
}

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('articles');

    let { id } = useParams<{id: string}>();

    if(__PROJECT__  === 'storybook') {
        id = '1'
    }

    const comments = useAppSelector(getArticleComments.selectAll)
    const commentsIsLoading = useAppSelector(getArticleCommentsIsLoading)
    const commentsError = useAppSelector(getArticleCommentsError)

    const dispatch = useAppDispatch();

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    if(!id) {
        return (
            <Page className={ classNames(cls.articleDetailsPage, {}, [className]) }>
                {t('Статья не найдена')}
            </Page>
        );
    }

    if(commentsError) {
        return (
            <Page className={ classNames(cls.articleDetailsPage, {}, [className]) }>
                {t('Ошибка загрузки')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <Page className={ classNames(cls.articleDetailsPage, {}, [className]) }>
                <ArticleDetailsPageHeader/>

                <ArticleDetails id={ id } />

                <ArticlesRecommendationsList/>

                <Text
                    className={ cls.commentTitle }
                    title={ t('Комментарии') } />

                <AddCommentForm
                    onSendComment={ onSendComment }
                />

                <CommentList
                    isLoading={ commentsIsLoading }
                    comments={ comments }
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);