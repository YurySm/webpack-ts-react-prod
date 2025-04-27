import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';

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

    const orderOptions = useMemo<SelectOption[]>(() => [
        {
            value: 'asc',
            label:  t('возрастанию')
        },
        {
            value: 'desc',
            label:  t('убыванию')
        },
    ], [t])

    const sortFieldOptions = useMemo<SelectOption[]>(() => [
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

    return (
        <div className={ classNames(cls.articlesortselector, {}, [className]) }>
            <Select
                value={ sort }
                options={ sortFieldOptions }
                label={ t('Сортировать по') }
            />

            <Select
                value={ order }
                label={ t('по') }
                options={ orderOptions }
            />
        </div>
    );
};