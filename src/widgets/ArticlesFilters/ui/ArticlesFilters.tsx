import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

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
        <Card
            className={classNames(cls.articlesfilters, {}, [className])}
            padding={'24'}
        >
            <VStack gap={'32'}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                    addonLeft={<Icon Svg={SearchIcon} />}
                />

                <ArticleTypeTabs
                    type={type}
                    onChangeType={onChangeType}
                    // className={cls.tabs}
                />

                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
            </VStack>
        </Card>
    );
};
