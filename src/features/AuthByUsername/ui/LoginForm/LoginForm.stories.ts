import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Theme } from '@/shared/constants/theme';

const tmpState: DeepPartial<StateSchema> = {
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
    scrollSave: {
        scroll: {}
    },
};

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
    // // argTypes: {
    // //     backgroundColor: { control: 'color' },
    // // },
    decorators: [StoreDecorator(tmpState)],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {};

export const WithError: Story = {
    decorators: [
        StoreDecorator({
            ...tmpState,
            loginForm: {
                ...tmpState.loginForm,
                error: 'Error',
            },
        }),
    ],
};

export const Loading: Story = {
    decorators: [
        StoreDecorator({
            ...tmpState,
            loginForm: {
                ...tmpState.loginForm,
                isLoading: true,
            },
        }),
    ],
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
