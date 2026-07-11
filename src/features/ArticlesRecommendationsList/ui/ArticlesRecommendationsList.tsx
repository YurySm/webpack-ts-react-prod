import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ArticleList } from '@/entities/Article';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useGetArticlesRecommendationsListQuery } from '../api/articleRecommendationsApi';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticlesRecommendationsListProps {
    className?: string;
}

export const ArticlesRecommendationsList = (
    props: ArticlesRecommendationsListProps,
) => {
    const { className } = props;

    const { t } = useTranslation('articles');

    const {
        data: articles,
        isLoading,
        isFetching,
    } = useGetArticlesRecommendationsListQuery(3);

    return (
        <VStack
            gap={'8'}
            className={classNames('', {}, [className])}
            data-testid="ArticlesRecommendationsList"
        >
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<Text size={'l'} title={t('Рекомендуем')} />}
                off={<TextDeprecated title={t('Рекомендуем')} />}
            />

            <ArticleList
                target={'_blank'}
                articles={articles || []}
                isLoading={isLoading || isFetching}
            />
        </VStack>
    );
};
