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
    const { theme: defaultTheme = Theme.LIGHT } = useGetJsonSettings();
    const [isThemeInited, setIsThemeInited] = useState(false);
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    useEffect(() => {
        if (!isThemeInited) {
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
