import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Theme } from '@/shared/constants/theme';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {},
    decorators: [StoreDecorator({
        profile: {
            data: {
                firstName: 'Max',
                lastName: 'Min',
                age: 22,
                username: 'admin',
                city: 'Moscow',
                currency: Currency.USD,
                country: Country.Russia,
            }
        }
    })],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    decorators: [StoreDecorator({
        profile: {
            data: {
                firstName: 'Max',
                lastName: 'Min',
                age: 22,
                username: 'admin',
                city: 'Moscow',
                currency: Currency.USD,
                country: Country.Russia,
            },
            form: {
                firstName: 'Max',
                lastName: 'Min',
                age: 22,
                username: 'admin',
                city: 'Moscow',
                currency: Currency.USD,
                country: Country.Russia,
            },
            readonly: true,
            isLoading: false
        }
    })]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
