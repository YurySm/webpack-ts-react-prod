import { ThemeContext } from '../../../context/ThemeContext';
import { useContext } from 'react';
import { Theme } from '@/shared/constants/theme';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.LIGHT:
                newTheme = Theme.VIOLET;
                break;
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.VIOLET:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);
        saveAction?.(newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
