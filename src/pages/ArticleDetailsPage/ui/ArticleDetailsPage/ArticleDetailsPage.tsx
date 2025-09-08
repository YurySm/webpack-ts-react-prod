import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { memo } from 'react';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getArticleCommentsError } from '../../model/selectors/comments';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticlesRecommendationsList } from '@/features/ArticlesRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
import { ArticleRating } from '@/features/ArticleRating';

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
}

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('articles');

    let { id } = useParams<{id: string}>();

    if(__PROJECT__  === 'storybook') {
        id = '1'
    }

    const commentsError = useAppSelector(getArticleCommentsError)

    if(!id) {
        return (
            <Page className={ classNames(cls.articleDetailsPage, {}, [className]) }>
                {t('Статья не найдена')}
            </Page>
        );
    }

    if(commentsError) {
        return (
            <Page className={ classNames(cls.articleDetailsPage, {}, [className]) }>
                {t('Ошибка загрузки')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <Page className={ classNames(cls.articleDetailsPage, {}, [className]) }>
                <ArticleDetailsPageHeader/>
                <ArticleDetails id={ id } />
                <ArticleRating articleId={ id } />
                <ArticlesRecommendationsList/>
                <ArticleDetailsComments id={ id }/>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);