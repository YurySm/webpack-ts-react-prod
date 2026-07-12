import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { Theme } from '@/shared/constants/theme';
import { withThemeByClassName } from '@storybook/addon-themes';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/decorators/FeaturesFlagsDecorator';

initialize();

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            disable: true,
        },
    },
    decorators: [
        RouterDecorator(),
        StoreDecorator({}),
        withThemeByClassName({
            themes: {
                light: `app ${Theme.LIGHT}`,
                dark: `app ${Theme.DARK}`,
                violet: `app ${Theme.VIOLET}`,
            },
            defaultTheme: 'light',
        }),
        mswDecorator,
        FeaturesFlagsDecorator({}),
    ],
    // loaders: [mswLoader],
};

export default preview;
