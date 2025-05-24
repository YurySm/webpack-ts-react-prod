import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    // parameters: {
    //     layout: 'centered',
    // },
    // tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    // args: { onClick: fn() },
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'test',
                password: 'test',
                isLoading: false,
            },
            user: {
                authData: undefined,
            },
            counter: {
                value: 0,
            },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightAuth: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'test',
                password: 'test',
                isLoading: false,
            },
            user: {
                authData: {
                    id: '1',
                    username: 'Test',
                },
            },
            counter: {
                value: 0,
            },
        }),
    ],
};

export const DarkAuth: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: 'test',
                password: 'test',
                isLoading: false,
            },
            user: {
                authData: {
                    id: '1',
                    username: 'Test',
                },
            },
            counter: {
                value: 0,
            },
        }),
    ],
};
