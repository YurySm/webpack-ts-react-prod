import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { memo } from 'react';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading
    } = props;

    const { t } = useTranslation();

    return (
        <div className={ classNames(cls.commentlist, {}, [className]) }>
            {
                comments && comments.length === 0  &&
                <Text text={ t('Комментарии отсутствуют') }/>
            }

            {
                comments && comments.length > 0 &&
                    comments.map(comment => (
                        <CommentCard
                            key={ comment.id }
                            isLoading={ isLoading }
                            comment={ comment } />
                    ))
            }
        </div>
    );
})

CommentList.displayName = 'CommentList';