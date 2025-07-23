import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPageHeader.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { RoutesPaths } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCanEditArticle } from '../../model/selectors/article';
import { getArticleDetailsData } from 'entities/Article';
import { useAppSelector } from 'app/providers/StoreProvider/config/hooks';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('articles');

    const isCanEdit = useAppSelector(getCanEditArticle)
    const article = useAppSelector(getArticleDetailsData)

    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutesPaths.articles)
    }, [navigate])

    const onEditArticle = useCallback(() => {
        navigate(`${RoutesPaths.articles}/${article?.id}/edit`)
    }, [navigate, article])

    return (
        <div className={ classNames(cls.articleDetailsPageHeader, {}, [className]) }>
            <Button
                theme={ ButtonTheme.OUTLINE }
                onClick={ onBackToList }
            >
                {t('Вернуться к списку')}
            </Button>

            {
                isCanEdit &&
                <Button
                    theme={ ButtonTheme.OUTLINE }
                    onClick={ onEditArticle }
                >
                    {t('Редактировать')}
                </Button>
            }
        </div>
    );
};