import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '@/shared/ui/Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg'
import { useState } from 'react';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    selectedStars?: number
    size?: number;
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = (props: StarRatingProps) => {
    const {
        className,
        onSelect,
        selectedStars = 0,
        size = 30
    } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState<number>(0);
    const [isSelected, setIsSelected] = useState<boolean>(Boolean(selectedStars));

    const onHover = (starNumber: number) => () => {
        if(!isSelected) {
            setCurrentStarsCount(starNumber)
        }
    }

    const onLeave =  () => {
        if(!isSelected) {
            setCurrentStarsCount(0)
        }
    }

    const onClick = (starNumber: number) => () => {
        if(!isSelected) {
            onSelect?.(starNumber);
            setCurrentStarsCount(starNumber)
            setIsSelected(true)
        }
    }


    return (
        <div className={ classNames(cls.starRating, {}, [className]) }>
            {
                stars.map((starNumber) => (
                    <Icon
                        className={ classNames(cls.starIcon, {
                            [cls.hovered]: currentStarsCount >= starNumber,
                            [cls.selected] : isSelected
                        }, []) }
                        key={ starNumber }
                        Svg={ StarIcon }
                        width={ size }
                        height={ size }
                        onMouseLeave={ onLeave }
                        onMouseEnter={ onHover(starNumber) }
                        onClick={ onClick(starNumber) }
                    />
                ))
            }
        </div>
    );
};