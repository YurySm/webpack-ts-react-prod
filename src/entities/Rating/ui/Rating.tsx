import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Rating.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { useCallback, useState } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingProps {
    className?: string;
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
}

export const Rating = (props: RatingProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
    } = props;

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [starsCount, setStarsCount] = useState<number>(0);
    const [feedback, setFeedback] = useState<string>('');

    const handeCloseModal = useCallback(() => {
        setIsOpenModal(false);
    }, [setIsOpenModal]);

    const onSelectStars = useCallback((starsCount: number) => {
        setStarsCount(starsCount);
        if(hasFeedback) {
            setIsOpenModal(true);
        } else {
            onAccept?.(starsCount)
        }

    }, [hasFeedback, onAccept])

    const handleOnAccept = useCallback(() => {
        handeCloseModal()
        onAccept?.(starsCount, feedback)
    }, [handeCloseModal, onAccept, starsCount, feedback])

    const handleOnCancel = useCallback(() => {
        handeCloseModal()
        onCancel?.(starsCount)
    }, [handeCloseModal, onCancel, starsCount])

    const modalContent  = (
        <VStack
            align={ 'center' }
            gap={ '32' }
        >
            <Text text={ feedbackTitle }/>
            <Input
                value={ feedback }
                onChange={ setFeedback }
                placeholder={ feedbackTitle }/>
            <HStack justify={ 'between' }>
                <Button
                    onClick={ handleOnCancel }
                    theme={ ButtonTheme.OUTLINE_RED }>{'Закрыть'}</Button>
                <Button
                    onClick={ handleOnAccept }
                    theme={ ButtonTheme.BACKGROUND_INVERTED }>{'Отправить'}</Button>
            </HStack>
        </VStack>
    )

    return (
        <Card className={ classNames(cls.rating, {}, [className]) }>
            <VStack align={ 'center' } gap={ '16' }>
                <Text text={ title }/>
                <StarRating
                    size={ 40 }
                    onSelect={ onSelectStars }
                />
            </VStack>
            <BrowserView>
                <Modal
                    lazy
                    isOpen={ isOpenModal }
                >
                    {modalContent}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={ isOpenModal } onClose={ handeCloseModal }>
                    {modalContent}
                </Drawer>
            </MobileView>
        </Card>
    );
};