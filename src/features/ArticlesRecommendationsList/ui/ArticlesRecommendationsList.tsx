import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Article';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/Stack';
import {
    useGetArticlesRecommendationsListQuery
} from '../api/articleRecommendationsApi';

interface ArticlesRecommendationsListProps {
    className?: string;
}

export const ArticlesRecommendationsList = (props: ArticlesRecommendationsListProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('articles');

    const {
        data: articles,
        isLoading,
        isFetching
    } = useGetArticlesRecommendationsListQuery(3)

    return (
        <VStack gap={ '8' } className={ classNames('', {}, [className]) } data-testid="ArticlesRecommendationsList">
            <Text
                title={ t('Рекомендуем') } />

            <ArticleList
                target={ '_blank' }
                articles={ articles || [] }
                isLoading={ isLoading || isFetching }
            />
        </VStack>
    );
};