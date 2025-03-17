import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('articles');

    return (
        <div className={ classNames(cls.ArticleDetailsPage, {}, [className]) }>
            {t('ArticleDetailsPage')}
        </div>
    );
};

export default memo(ArticleDetailsPage);