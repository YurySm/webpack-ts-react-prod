import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { useCallback, useState } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingProps {
    className?: string;
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
    rate?: number
}

export const RatingCard = (props: RatingProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0
    } = props;

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [starsCount, setStarsCount] = useState<number>(rate);
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
                data-testid={ 'RatingCard.Input' }
                value={ feedback }
                onChange={ setFeedback }
                placeholder={ feedbackTitle }/>
            <HStack justify={ 'between' }>
                <Button
                    data-testid={ 'RatingCard.CloseButton' }
                    onClick={ handleOnCancel }
                    theme={ ButtonTheme.OUTLINE_RED }>{'Закрыть'}</Button>
                <Button
                    data-testid={ 'RatingCard.SendButton' }
                    onClick={ handleOnAccept }
                    theme={ ButtonTheme.BACKGROUND_INVERTED }>{'Отправить'}</Button>
            </HStack>
        </VStack>
    )

    return (
        <Card className={ className } data-testid={ 'RatingCard' }>
            <VStack align={ 'center' } gap={ '16' }>
                <Text text={ starsCount ? 'Спасибо за оценку!': title }/>
                <StarRating
                    selectedStars={ starsCount }
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