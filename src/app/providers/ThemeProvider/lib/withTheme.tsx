import { ComponentType } from 'react';
import { useGetJsonSettings } from '@/entities/User';
import ThemeProvider from '../ui/ThemeProvider';

export const withTheme = (Component: ComponentType) => {
    // eslint-disable-next-line react/display-name
    return () => {
        const { theme: defaultTheme } = useGetJsonSettings();

        return (
            <ThemeProvider initialTheme={defaultTheme}>
                <Component />
            </ThemeProvider>
        );
    };
};
