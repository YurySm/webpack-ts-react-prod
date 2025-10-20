import { ReactElement } from 'react';
import { Theme } from '@/shared/constants/theme';
// eslint-disable-next-line fsd-path-checker/layers-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export function ThemeDecorator(theme: Theme) {
    return (
        // eslint-disable-next-line react/display-name
        (Story: () => ReactElement) => (
            <ThemeProvider initialTheme={ theme }>
                <div className={ `app ${theme}` }>
                    <Story />
                </div>
            </ThemeProvider>
        )
    );
}
