import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

interface NotificationItemProps {
    className?: string;
    notification: Notification;
}

export const NotificationItem = (props: NotificationItemProps) => {
    const { className, notification } = props;

    const content = (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card
                    className={classNames(cls.notificationItem, {}, [
                        className,
                    ])}
                >
                    <Text
                        title={notification.title}
                        text={notification.description}
                    />
                </Card>
            }
            off={
                <CardDeprecated
                    className={classNames(cls.notificationItem, {}, [
                        className,
                    ])}
                    theme={CardTheme.OUTLINED}
                >
                    <TextDeprecated
                        title={notification.title}
                        text={notification.description}
                    />
                </CardDeprecated>
            }
        />
    );

    if (notification.href) {
        return (
            <a target="_blank" href={notification.href} rel="noreferrer">
                {content}
            </a>
        );
    }
    return content;
};
