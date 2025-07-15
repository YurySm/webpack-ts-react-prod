import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { rtkApi } from 'shared/api/rtkApi';

interface ArticlesRecommendationsListProps {
    className?: string;
}

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticlesRecommendationsList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit
                }
            }),
        }),
    })
})

const { useGetArticlesRecommendationsListQuery } = recommendationsApi

export const ArticlesRecommendationsList = (props: ArticlesRecommendationsListProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('articles');

    const {
        data,
        isLoading,
        isFetching
    } = useGetArticlesRecommendationsListQuery(3)

    return (
        <VStack gap={ '8' } className={ classNames('', {}, [className]) }>
            <Text
                title={ t('Рекомендуем') } />

            <ArticleList
                target={ '_blank' }
                articles={ data || [] }
                isLoading={ isLoading || isFetching }
            />
        </VStack>
    );
};