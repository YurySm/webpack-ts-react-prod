import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { useCallback, useState } from 'react';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface RatingProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = (props: RatingProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [starsCount, setStarsCount] = useState<number>(rate);
    const [feedback, setFeedback] = useState<string>('');

    const handeCloseModal = useCallback(() => {
        setIsOpenModal(false);
    }, [setIsOpenModal]);

    const onSelectStars = useCallback(
        (starsCount: number) => {
            setStarsCount(starsCount);
            if (hasFeedback) {
                setIsOpenModal(true);
            } else {
                onAccept?.(starsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const handleOnAccept = useCallback(() => {
        handeCloseModal();
        onAccept?.(starsCount, feedback);
    }, [handeCloseModal, onAccept, starsCount, feedback]);

    const handleOnCancel = useCallback(() => {
        handeCloseModal();
        onCancel?.(starsCount);
    }, [handeCloseModal, onCancel, starsCount]);

    const modalContent = (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <VStack align={'center'} gap={'32'}>
                    <Text text={feedbackTitle} />
                    <Input
                        data-testid={'RatingCard.Input'}
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={feedbackTitle}
                    />
                    <HStack justify={'between'}>
                        <Button
                            data-testid={'RatingCard.CloseButton'}
                            onClick={handleOnCancel}
                            variant={'filled'}
                        >
                            {'Закрыть'}
                        </Button>
                        <Button
                            data-testid={'RatingCard.SendButton'}
                            onClick={handleOnAccept}
                            variant={'outline'}
                        >
                            {'Отправить'}
                        </Button>
                    </HStack>
                </VStack>
            }
            off={
                <VStack align={'center'} gap={'32'}>
                    <TextDeprecated text={feedbackTitle} />
                    <InputDeprecated
                        data-testid={'RatingCard.Input'}
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={feedbackTitle}
                    />
                    <HStack justify={'between'}>
                        <ButtonDeprecated
                            data-testid={'RatingCard.CloseButton'}
                            onClick={handleOnCancel}
                            theme={ButtonTheme.OUTLINE_RED}
                        >
                            {'Закрыть'}
                        </ButtonDeprecated>
                        <ButtonDeprecated
                            data-testid={'RatingCard.SendButton'}
                            onClick={handleOnAccept}
                            theme={ButtonTheme.BACKGROUND_INVERTED}
                        >
                            {'Отправить'}
                        </ButtonDeprecated>
                    </HStack>
                </VStack>
            }
        />
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card
                    className={className}
                    data-testid={'RatingCard'}
                    padding={'24'}
                    border={'partial'}
                >
                    <VStack align={'center'} gap={'16'}>
                        <Text
                            text={starsCount ? 'Спасибо за оценку!' : title}
                        />
                        <StarRating
                            selectedStars={starsCount}
                            size={40}
                            onSelect={onSelectStars}
                        />
                    </VStack>
                    <BrowserView>
                        <Modal lazy isOpen={isOpenModal}>
                            {modalContent}
                        </Modal>
                    </BrowserView>
                    <MobileView>
                        <Drawer isOpen={isOpenModal} onClose={handeCloseModal}>
                            {modalContent}
                        </Drawer>
                    </MobileView>
                </Card>
            }
            off={
                <CardDeprecated
                    className={className}
                    data-testid={'RatingCard'}
                >
                    <VStack align={'center'} gap={'16'}>
                        <TextDeprecated
                            text={starsCount ? 'Спасибо за оценку!' : title}
                        />
                        <StarRating
                            selectedStars={starsCount}
                            size={40}
                            onSelect={onSelectStars}
                        />
                    </VStack>
                    <BrowserView>
                        <Modal lazy isOpen={isOpenModal}>
                            {modalContent}
                        </Modal>
                    </BrowserView>
                    <MobileView>
                        <Drawer isOpen={isOpenModal} onClose={handeCloseModal}>
                            {modalContent}
                        </Drawer>
                    </MobileView>
                </CardDeprecated>
            }
        />
    );
};
