import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutesPaths } from 'shared/config/routeConfig/routeConfig';

interface CommentCardProps {
    className?: string;
    comment?: Comment
    isLoading?: boolean;
    key?: string
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={ classNames(cls.commentCard, {}, [className, cls.loading]) }>
                <div className={ cls.header }>
                    <Skeleton
                        width={ 30 }
                        height={ 30 }
                        borderRadius={ '50%' }
                    />

                    <Skeleton
                        width={ 150 }
                        height={ 23 }
                    />
                </div>
                <Skeleton
                    className={ cls.text }
                    width={ '100%' }
                    height={ 55 }/>
            </div>
        )
    }

    if(!comment) return null

    return (
        <div className={ classNames(cls.commentCard, {}, [className]) }>
            <AppLink to={ `${RoutesPaths.profile}${comment?.user?.id}` } className={ cls.header }>
                {
                    comment.user?.avatar &&
                    <Avatar
                        size={ 30 }
                        src={ comment.user?.avatar }
                        alt={ comment.user?.username }
                    />
                }

                <Text title={ comment.user?.username } />
            </AppLink>
            <Text
                className={ cls.text }
                text={ comment?.text }/>
        </div>
    );
})

CommentCard.displayName = 'CommentCard';