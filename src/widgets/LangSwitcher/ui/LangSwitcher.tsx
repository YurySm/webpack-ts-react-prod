import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ ButtonTheme.CLEAR }
            onClick={ toggle }
            className={ classNames(cls.langSwitcher, {}, [className]) }
        >
            {i18n.language === 'ru' ? 'ru' : 'en'}
        </Button>
    );
});

LangSwitcher.displayName = 'LangSwitcher';
