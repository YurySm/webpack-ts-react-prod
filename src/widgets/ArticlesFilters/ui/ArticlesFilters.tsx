import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input } from '@/shared/ui/deprecated/Input';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (order: SortOrder) => void;
    onChangeSort: (sort: ArticleSortField) => void;
    type: ArticleType;
    onChangeType: (tab: ArticleType) => void;
    search: string;
    onChangeSearch: (newSearch: string) => void;
}

export const ArticlesFilters = (props: ArticlesFiltersProps) => {
    const {
        className,
        onChangeOrder,
        onChangeSort,
        onChangeType,
        onChangeSearch,
        order,
        sort,
        type,
        search,
    } = props;
    const { t } = useTranslation();

    return (
        <Card>
            <VStack gap={'32'}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />

                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                />

                <ArticleTypeTabs
                    type={type}
                    onChangeType={onChangeType}
                    // className={cls.tabs}
                />
            </VStack>
        </Card>
    );
};
