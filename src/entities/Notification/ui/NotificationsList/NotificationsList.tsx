import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationsList.module.scss';
import { useGetNotificationsListQuery } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Notification } from '../../model/types/notification';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface NotificationsListProps {
    className?: string;
}

export const NotificationsList = (props: NotificationsListProps) => {
    const {
        className,
    } = props;

    const {
        data: notifications,
        isLoading,
        isFetching,
    } = useGetNotificationsListQuery(undefined, {
        // pollingInterval: 5000
    })

    if(isLoading || isFetching) {
        return (
            <VStack
                gap={ '8' }
                className={ classNames(cls.notificationsList, {}, [className]) }
            >
                <Skeleton width={ '300px' } borderRadius={ '5px' } height={ '80px' } />
                <Skeleton width={ '300px' } borderRadius={ '5px' } height={ '80px' } />
                <Skeleton width={ '300px' } borderRadius={ '5px' } height={ '80px' } />
            </VStack>
        );
    }

    return (
        <VStack
            gap={ '8' }
            className={ classNames(cls.notificationsList, {}, [className]) }
        >
            {
                notifications?.map((notification: Notification) => (
                    <NotificationItem
                        key={ notification.id }
                        notification={ notification } />
                ))
            }
        </VStack>
    );
};