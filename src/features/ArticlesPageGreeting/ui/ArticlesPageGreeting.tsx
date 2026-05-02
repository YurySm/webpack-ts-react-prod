import { Modal } from '@/shared/ui/Modal';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign } from '@/shared/ui/Text';
import { saveJsonSettings, useGetJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import { isMobile } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer';

export const ArticlesPageGreeting = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const onClose = useCallback(() => setIsOpen(false), []);

    const { isArticlesPageWasOpened } = useGetJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
        }
    }, [dispatch, isArticlesPageWasOpened]);

    const text = (
        <Text
            align={TextAlign.CENTER}
            title={t('Добро пожаловать на страницу статей!')}
            text={t('Здесь можно найти интересующую Вас статью')}
        />
    );

    if (isMobile) {
        return (
            <Drawer lazy isOpen={isOpen} onClose={onClose}>
                {text}
            </Drawer>
        );
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {text}
        </Modal>
    );
};
