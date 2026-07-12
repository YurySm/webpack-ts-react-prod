import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Text as TextDeptecated } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import { memo } from 'react';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { getRouteProfile } from '@/shared/constants/router';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
    key?: string;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <div
                className={classNames(cls.commentCard, {}, [
                    className,
                    cls.loading,
                ])}
                data-testid={'CommentCard.Loading'}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius={'50%'} />

                    <Skeleton width={150} height={23} />
                </div>
                <Skeleton className={cls.text} width={'100%'} height={55} />
            </div>
        );
    }

    if (!comment) return null;

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card border={'partial'} padding={'24'}>
                    <VStack
                        gap={'16'}
                        className={classNames('', {}, [className])}
                        data-testid={'CommentCard.Content'}
                    >
                        <AppLink to={getRouteProfile(comment?.user?.id)}>
                            <HStack gap={'16'}>
                                {comment.user?.avatar && (
                                    <Avatar
                                        size={30}
                                        src={comment.user?.avatar}
                                        alt={comment.user?.username}
                                    />
                                )}

                                <Text text={comment.user?.username} bold />
                            </HStack>
                        </AppLink>
                        <Text
                            data-testid={'CommentCard.Text'}
                            text={comment?.text}
                        />
                    </VStack>
                </Card>
            }
            off={
                <div
                    className={classNames(cls.commentCard, {}, [className])}
                    data-testid={'CommentCard.Content'}
                >
                    <AppLinkDeprecated
                        to={getRouteProfile(comment?.user?.id)}
                        className={cls.header}
                    >
                        {comment.user?.avatar && (
                            <AvatarDeprecated
                                size={30}
                                src={comment.user?.avatar}
                                alt={comment.user?.username}
                            />
                        )}

                        <TextDeptecated title={comment.user?.username} />
                    </AppLinkDeprecated>
                    <TextDeptecated
                        data-testid={'CommentCard.Text'}
                        className={cls.text}
                        text={comment?.text}
                    />
                </div>
            }
        />
    );
});

CommentCard.displayName = 'CommentCard';
