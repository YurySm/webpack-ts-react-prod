import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    const { id } = useParams<{id: string}>();

    if(!id) {
        return (
            <div className={ classNames(cls.articleDetailsPage, {}, [className]) }>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={ classNames(cls.articleDetailsPage, {}, [className]) }>
            <ArticleDetails id={ id } />
        </div>
    );
};

export default memo(ArticleDetailsPage);