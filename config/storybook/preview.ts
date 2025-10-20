import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { Theme } from '@/shared/constants/theme';

initialize();

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
        StoreDecorator({}),
    ],
    loaders: [mswLoader],
};

export default preview;
