import cls from './NotificationButton.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationsList } from 'entities/Notification';
import { Popover } from 'shared/ui/popups';

export const NotificationButton = () => {
    return (
        <Popover
            anchor={ 'bottom end' }
            trigger={
                <Button theme={ ButtonTheme.CLEAR }>
                    <Icon inverted Svg={ NotificationIcon }/>
                </Button>
            }
        >
            <NotificationsList className={ cls.notification }/>
        </Popover>
    );
};