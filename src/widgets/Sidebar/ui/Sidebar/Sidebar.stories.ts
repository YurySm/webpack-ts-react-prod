import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {},
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'admin'
                }
            }
        })
    ]
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightWithoutAuth: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: undefined
            }
        })
    ],
};

export const DarkWithoutAuth: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {
                authData: undefined
            }
        })
    ],
};

