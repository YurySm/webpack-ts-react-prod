import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export function ThemeDecorator(theme: Theme) {
    return (
        (Story: StoryFn) => (
            <div className={`app ${theme}`}>
                <Story />
            </div>
        ));
}
