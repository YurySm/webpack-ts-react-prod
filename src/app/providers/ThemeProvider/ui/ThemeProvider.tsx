import {
    PropsWithChildren,
    ReactNode,
    useEffect,
    useMemo,
    useState,
} from 'react';

import { Theme } from '@/shared/constants/theme';
import { ThemeContext } from '@/shared/context/ThemeContext';
import { useGetJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

const ThemeProvider = ({
    children,
    initialTheme,
}: PropsWithChildren<ThemeProviderProps>) => {
    const { theme: defaultTheme } = useGetJsonSettings();
    const [isThemeInited, setIsThemeInited] = useState(false);
    const [theme, setTheme] = useState<Theme>(
        initialTheme || defaultTheme || Theme.LIGHT,
    );

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setIsThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
