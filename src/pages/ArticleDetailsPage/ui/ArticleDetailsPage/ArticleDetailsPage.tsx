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
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/AddCommentForm';
import {
    addCommentForArticle
} from '../../model/services/addCommentForArticle/addCommentForArticle';

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
            <div className={ classNames(cls.articleDetailsPage, {}, [className]) }>
                {t('Статья не найдена')}
            </div>
        );
    }

    if(commentsError) {
        return (
            <div className={ classNames(cls.articleDetailsPage, {}, [className]) }>
                {t('Ошибка загрузки')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <div className={ classNames(cls.articleDetailsPage, {}, [className]) }>
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
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);