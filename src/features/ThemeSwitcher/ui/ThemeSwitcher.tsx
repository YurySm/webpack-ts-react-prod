import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import { Icon } from 'src/shared/ui/deprecated/Icon';
import { Button, ButtonTheme } from 'src/shared/ui/deprecated/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
            dispatch(
                saveJsonSettings({
                    theme: newTheme,
                }),
            );
        });
    }, [dispatch, toggleTheme]);

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={onToggleHandler}
        >
            <Icon Svg={ThemeIcon} width={40} height={40} inverted={true} />
        </Button>
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
