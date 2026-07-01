import cls from './NotificationButton.module.scss';
import { Button, ButtonTheme } from 'src/shared/ui/deprecated/Button';
import { Icon } from 'src/shared/ui/deprecated/Icon';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { NotificationsList } from '@/entities/Notification';
import { Popover } from 'src/shared/ui/deprecated/popups';
import { useCallback, useState } from 'react';
import { Drawer } from 'src/shared/ui/deprecated/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';

export const NotificationButton = () => {
    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

    const handleOpenDrawer = useCallback(() => {
        setIsOpenDrawer(true);
    }, [setIsOpenDrawer]);

    const handleCloseDrawer = useCallback(() => {
        setIsOpenDrawer(false);
    }, [setIsOpenDrawer]);

    const trigger = (
        <Button onClick={handleOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon inverted Svg={NotificationIcon} />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover anchor={'bottom end'} trigger={trigger}>
                    <NotificationsList className={cls.notification} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpenDrawer} onClose={handleCloseDrawer}>
                    <NotificationsList />
                </Drawer>
            </MobileView>
        </div>
    );
};
