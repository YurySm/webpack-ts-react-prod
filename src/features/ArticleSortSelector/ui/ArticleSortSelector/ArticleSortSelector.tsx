import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/popups';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (order: SortOrder) => void;
    onChangeSort: (sort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;

    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                label: t('возрастанию'),
            },
            {
                value: 'desc',
                label: t('убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                label: t('дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                label: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                label: t('просмотрам'),
            },
        ],
        [t],
    );

    // const changeSortHandler = useCallback((newSort: string) => {
    //     onChangeSort(newSort as ArticleSortField)
    // }, [onChangeSort])
    //
    // const changeOrderHandler = useCallback((newOrder: string) => {
    //     onChangeOrder(newOrder as SortOrder)
    // }, [onChangeOrder])

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <VStack
                    gap={'16'}
                    className={classNames(
                        cls.articleSortSelectorRedesigned,
                        {},
                        [className],
                    )}
                >
                    <Text title={t('Сортировать по')} />

                    <ListBox<ArticleSortField>
                        value={sort}
                        items={sortFieldOptions}
                        // label={t('Сортировать по')}
                        onChange={onChangeSort}
                    />

                    <ListBox<SortOrder>
                        value={order}
                        // label={t('по')}
                        items={orderOptions}
                        onChange={onChangeOrder}
                    />
                </VStack>
            }
            off={
                <div
                    className={classNames(cls.articleSortSelector, {}, [
                        className,
                    ])}
                >
                    <Select
                        value={sort}
                        options={sortFieldOptions}
                        label={t('Сортировать по')}
                        onChange={onChangeSort}
                    />

                    <Select
                        value={order}
                        label={t('по')}
                        options={orderOptions}
                        onChange={onChangeOrder}
                    />
                </div>
            }
        />
    );
};
