import { AppRoutes } from '@/shared/constants/router';
import { ReactElement } from 'react';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { useRouterChange } from '@/shared/lib/router/useRouterChange';

export function useAppToolbar() {
    const appRoute = useRouterChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
        [AppRoutes.MAIN]: <div />,
    };

    return toolbarByAppRoute[appRoute];
}
