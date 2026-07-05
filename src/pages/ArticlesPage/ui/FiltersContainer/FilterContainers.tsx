import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticlesFilters } from '../../model/lib/hooks/useArticlesFilters';

interface FilterContainersProps {
    className?: string;
}

export const FilterContainers = (props: FilterContainersProps) => {
    const { className } = props;

    const {
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        onChangeType,
        order,
        search,
        sort,
        type,
    } = useArticlesFilters();

    return (
        <ArticlesFilters
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
            onChangeSort={onChangeSort}
            order={order}
            search={search}
            sort={sort}
            type={type}
            className={className}
        />
    );
};
