import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading
    } = props;
    const { t } = useTranslation();
    return (
        <div className={ classNames(cls.commentlist, {}, [className]) }>
            {
                comments && comments.length > 0 ?
                    comments.map(comment => (
                        <CommentCard
                            key={ comment.id }
                            comment={ comment } />
                    )) :
                    <Text text={ t('Комментарии отсутствуют') }/>
            }
        </div>
    );
};