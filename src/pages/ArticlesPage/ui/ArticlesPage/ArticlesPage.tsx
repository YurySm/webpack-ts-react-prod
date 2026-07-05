import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { memo, useCallback } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { Page } from '@/widgets/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';
import { ArticlesInfinityList } from '../ArticlesInfinityList/ArticlesInfinityList';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import { ArticlesPageGreeting } from '@/features/ArticlesPageGreeting';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FilterContainers } from '../FiltersContainer/FilterContainers';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    const [searchParams] = useSearchParams();

    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    const content = (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <StickyContentLayout
                    content={
                        <Page
                            data-testid={'ArticlesPage'}
                            onScrollEnd={onLoadNextPart}
                            className={classNames(
                                cls.articlesPageRedesigned,
                                {},
                                [className],
                            )}
                        >
                            {/*<ArticlesPageFilters />*/}
                            <ArticlesInfinityList
                                searchParams={searchParams}
                                className={cls.list}
                            />
                            <ArticlesPageGreeting />
                        </Page>
                    }
                    left={<ViewSelectorContainer />}
                    right={<FilterContainers />}
                />
            }
            off={
                <Page
                    data-testid={'ArticlesPage'}
                    onScrollEnd={onLoadNextPart}
                    className={classNames(cls.articlesPage, {}, [className])}
                >
                    <ArticlesPageFilters />
                    <ArticlesInfinityList
                        searchParams={searchParams}
                        className={cls.list}
                    />
                    <ArticlesPageGreeting />
                </Page>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
