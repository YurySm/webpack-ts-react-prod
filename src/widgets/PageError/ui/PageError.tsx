import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reload = () => {
        location.reload();
    };
    return (
        <div className={ classNames(cls.pageError, {}, [className]) }>
            <p className={ classNames(cls.title) }>
                {t('Произошла непредвиденная ошибка')}
            </p>
            <Button
                onClick={ reload }
                type="button"
                className={ classNames(cls.btn) }
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
