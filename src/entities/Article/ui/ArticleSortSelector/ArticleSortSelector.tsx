import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from '../../model/consts/consts';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (order: SortOrder) => void
    onChangeSort: (sort: ArticleSortField) => void
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort
    } = props;

    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            label:  t('возрастанию')
        },
        {
            value: 'desc',
            label:  t('убыванию')
        },
    ], [t])

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            label:  t('дате создания')
        },
        {
            value: ArticleSortField.TITLE,
            label:  t('названию')
        },
        {
            value: ArticleSortField.VIEWS,
            label:  t('просмотрам')
        },
    ], [t])

    // const changeSortHandler = useCallback((newSort: string) => {
    //     onChangeSort(newSort as ArticleSortField)
    // }, [onChangeSort])
    //
    // const changeOrderHandler = useCallback((newOrder: string) => {
    //     onChangeOrder(newOrder as SortOrder)
    // }, [onChangeOrder])

    return (
        <div className={ classNames(cls.articleSortSelector, {}, [className]) }>
            <Select
                value={ sort }
                options={ sortFieldOptions }
                label={ t('Сортировать по') }
                onChange={ onChangeSort }
            />

            <Select
                value={ order }
                label={ t('по') }
                options={ orderOptions }
                onChange={ onChangeOrder }
            />
        </div>
    );
};