import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { useAppSelector } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article';
import cls from './AdditionalInfoContainer.module.scss';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { getRouteArticleEdit } from '@/shared/constants/router';

export const AdditionalInfoContainer = () => {
    const article = useAppSelector(getArticleDetailsData);

    const navigate = useNavigate();

    const onEditArticle = useCallback(() => {
        navigate(getRouteArticleEdit(article?.id || ''));
    }, [navigate, article]);

    if (!article) {
        return null;
    }

    return (
        <Card padding={'24'} border={'round'} className={cls.card}>
            <ArticleAdditionalInfo
                createdAt={article.createdAt}
                author={article.user}
                views={article.views}
                onEditArticle={onEditArticle}
            />
        </Card>
    );
};
