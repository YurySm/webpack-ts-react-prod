import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
// import { TranslationDecorator } from 'shared/config/storybook/decorators/TranslationDecorator';

const preview: Preview = { 
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator(),
        StoreDecorator({})
        // TranslationDecorator()
    ],
};

export default preview;
