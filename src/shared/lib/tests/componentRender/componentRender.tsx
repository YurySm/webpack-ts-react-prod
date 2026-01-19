import { ReactNode, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/shared/config/i18n/i18nForTesting';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
// eslint-disable-next-line fsd-path-checker/layers-imports
import '@/app/styles/index.scss'
// eslint-disable-next-line fsd-path-checker/layers-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/constants/theme';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme
}

interface TestProviderProps{
    children: ReactNode;
    options?: ComponentRenderOptions
}

export function TestProvider(props: TestProviderProps) {
    const { options = {}, children } = props

    const { route = '/', initialState, asyncReducers, theme = Theme.LIGHT } = options;
    return (
        <MemoryRouter initialEntries={ [route] }>
            <StoreProvider asyncReducers={ asyncReducers } initialState={ initialState }>
                <I18nextProvider i18n={ i18n }>
                    <ThemeProvider initialTheme={ theme }>
                        <div className={ `app ${theme}` }>
                            <Suspense fallback={ <div></div> }>{children}</Suspense>
                        </div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}

export function componentRender(
    component: ReactNode,
    options: ComponentRenderOptions = {},
) {
    return render(
        <TestProvider options={ options }>{component}</TestProvider>
    );
}
