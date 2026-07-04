import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';

import { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />}
            off={
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    className={classNames('', {}, [className])}
                    onClick={onToggleHandler}
                >
                    <IconDeprecated
                        Svg={ThemeIconDeprecated}
                        width={40}
                        height={40}
                        inverted={true}
                    />
                </ButtonDeprecated>
            }
        />
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
