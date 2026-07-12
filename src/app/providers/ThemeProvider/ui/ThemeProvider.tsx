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
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/localstorage';

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider = ({
    children,
    initialTheme,
}: PropsWithChildren<ThemeProviderProps>) => {
    const { theme: defaultTheme } = useGetJsonSettings();
    const [isThemeInited, setIsThemeInited] = useState(false);
    const [theme, setTheme] = useState<Theme>(
        initialTheme || fallbackTheme || Theme.LIGHT,
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

    useEffect(() => {
        if (document) {
            document.body.className = theme;
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
