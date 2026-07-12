import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleUpIcon from '@/shared/assets/icons/circle-up.svg';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = (props: ScrollToTopButtonProps) => {
    const { className } = props;

    const onClick = () => {
        window?.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Icon
            clickable
            onClick={onClick}
            width={32}
            height={32}
            Svg={CircleUpIcon}
            className={classNames(cls.scrolltotopbutton, {}, [className])}
        />
    );
};
