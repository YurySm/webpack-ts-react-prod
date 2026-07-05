import cls from './NotificationButton.module.scss';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';

import { NotificationsList } from '@/entities/Notification';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/popups';
import { useCallback, useState } from 'react';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/popups/ui/Popover/Popover';

export const NotificationButton = () => {
    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

    const handleOpenDrawer = useCallback(() => {
        setIsOpenDrawer(true);
    }, [setIsOpenDrawer]);

    const handleCloseDrawer = useCallback(() => {
        setIsOpenDrawer(false);
    }, [setIsOpenDrawer]);

    const trigger = (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Icon
                    Svg={NotificationIcon}
                    clickable
                    onClick={handleCloseDrawer}
                />
            }
            off={
                <ButtonDeprecated
                    onClick={handleOpenDrawer}
                    theme={ButtonTheme.CLEAR}
                >
                    <IconDeprecated inverted Svg={NotificationIconDeprecated} />
                </ButtonDeprecated>
            }
        />
    );

    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <Popover anchor={'bottom end'} trigger={trigger}>
                            <NotificationsList className={cls.notification} />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            anchor={'bottom end'}
                            trigger={trigger}
                        >
                            <NotificationsList className={cls.notification} />
                        </PopoverDeprecated>
                    }
                />
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
