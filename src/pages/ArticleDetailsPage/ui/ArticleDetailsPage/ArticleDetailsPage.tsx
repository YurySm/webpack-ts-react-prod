import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutesPaths } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
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
    const navigate = useNavigate();

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

    const onBackToList = useCallback(() => {
        navigate(RoutesPaths.articles)
    }, [navigate])

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
                <Button
                    theme={ ButtonTheme.OUTLINE }
                    onClick={ onBackToList }
                >
                    {t('Вернуться к списку')}</Button>
                <ArticleDetails id={ id } />

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