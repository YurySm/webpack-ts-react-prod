import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Button
                    variant={'clear'}
                    onClick={toggle}
                    className={classNames(cls.langSwitcherRedesigned, {}, [
                        className,
                    ])}
                >
                    {i18n.language === 'ru' ? 'ru' : 'en'}
                </Button>
            }
            off={
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    onClick={toggle}
                    className={classNames(cls.langSwitcher, {}, [className])}
                >
                    {i18n.language === 'ru' ? 'ru' : 'en'}
                </ButtonDeprecated>
            }
        />
    );
});

LangSwitcher.displayName = 'LangSwitcher';
