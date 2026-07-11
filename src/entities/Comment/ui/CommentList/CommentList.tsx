import { classNames } from '@/shared/lib/classNames/classNames';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import { useTranslation } from 'react-i18next';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { memo } from 'react';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.commentList, {}, [className])}>
                <CommentCard isLoading={isLoading} />

                <CommentCard isLoading={isLoading} />

                <CommentCard isLoading={isLoading} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {comments && comments.length === 0 && (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={<Text text={t('Комментарии отсутствуют')} />}
                    off={<TextDeprecated text={t('Комментарии отсутствуют')} />}
                />
            )}

            <VStack gap={'16'}>
                {comments &&
                    comments.length > 0 &&
                    comments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            isLoading={isLoading}
                            comment={comment}
                        />
                    ))}
            </VStack>
        </div>
    );
});

CommentList.displayName = 'CommentList';
