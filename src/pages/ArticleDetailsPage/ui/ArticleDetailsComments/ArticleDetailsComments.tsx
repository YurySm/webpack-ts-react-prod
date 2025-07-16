import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsComments.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useCallback } from 'react';
import {
    addCommentForArticle
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string
}

export const ArticleDetailsComments = (props: ArticleDetailsCommentsProps) => {
    const {
        className,
        id
    } = props;
    const { t } = useTranslation('articles');

    const comments = useAppSelector(getArticleComments.selectAll)
    const commentsIsLoading = useAppSelector(getArticleCommentsIsLoading)

    const dispatch = useAppDispatch();

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    return (
        <div className={ classNames('', {}, [className]) }>
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
    );
};