import { classNames } from '@/shared/lib/classNames/classNames';
import { useCallback, useMemo } from 'react';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { useTranslation } from 'react-i18next';
import { ArticleType } from '../../model/consts/consts';

interface ArticleTypeTabsProps {
    className?: string;
    type: ArticleType
    onChangeType: (tab: ArticleType) => void
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const {
        className,
        type,
        onChangeType
    } = props;

    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все')
        },
        {
            value: ArticleType.IT,
            content: t('Айти')
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука')
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика')
        },
    ], [t])

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType)
    }, [onChangeType])

    return (
        <Tabs
            className={ classNames('', {}, [className]) }
            tabs={ typeTabs }
            value={ type }
            onTabClick={ onTabClick }
        />
    );
};