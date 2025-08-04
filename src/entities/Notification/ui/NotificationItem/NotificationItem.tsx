import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';

interface NotificationItemProps {
    className?: string;
    notification: Notification;
}

export const NotificationItem = (props: NotificationItemProps) => {
    const {
        className,
        notification
    } = props;

    const content = (
        <Card
            className={ classNames(cls.notificationItem, {}, [className]) }
            theme={ CardTheme.OUTLINED }
        >
            <Text title={ notification.title } text={ notification.description }/>
        </Card>
    )

    if(notification.href) {
        return (
            <a target="_blank" href={ notification.href } rel="noreferrer">
                {content}
            </a>
        )
    }
    return content;
};