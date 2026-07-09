import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationsList.module.scss';
import { useGetNotificationsListQuery } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Notification } from '../../model/types/notification';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton as SkeletonDerprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import { toggleFeatures } from '@/shared/lib/features';

interface NotificationsListProps {
    className?: string;
}

export const NotificationsList = (props: NotificationsListProps) => {
    const { className } = props;

    const {
        data: notifications,
        isLoading,
        isFetching,
    } = useGetNotificationsListQuery(undefined, {
        // pollingInterval: 5000
    });

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDerprecated,
    });

    if (isLoading || isFetching) {
        return (
            <VStack
                gap={'8'}
                className={classNames(cls.notificationsList, {}, [className])}
            >
                <Skeleton
                    width={'300px'}
                    borderRadius={'5px'}
                    height={'80px'}
                />
                <Skeleton
                    width={'300px'}
                    borderRadius={'5px'}
                    height={'80px'}
                />
                <Skeleton
                    width={'300px'}
                    borderRadius={'5px'}
                    height={'80px'}
                />
            </VStack>
        );
    }

    return (
        <VStack
            gap={'8'}
            className={classNames(cls.notificationsList, {}, [className])}
        >
            {notifications?.map((notification: Notification) => (
                <NotificationItem
                    key={notification.id}
                    notification={notification}
                />
            ))}
        </VStack>
    );
};
