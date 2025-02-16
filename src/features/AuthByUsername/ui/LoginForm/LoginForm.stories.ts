import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StateSchema } from 'app/providers/StoreProvider';

const tmpState: StateSchema = {
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
}

const meta: Meta<typeof LoginForm> = {
	title: 'feature/LoginForm',
	component: LoginForm,
	// parameters: {
	//     layout: 'centered',
	// },
	tags: ['autodocs'],
	// // argTypes: {
	// //     backgroundColor: { control: 'color' },
	// // },
	decorators: [StoreDecorator(tmpState)]
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {};

export const WithError: Story = {
	decorators: [StoreDecorator({
		...tmpState,
		loginForm: {
			...tmpState.loginForm,
			error: 'Error'
		}
	})],
};

export const IsLoading: Story = {
	decorators: [StoreDecorator({
		...tmpState,
		loginForm: {
			...tmpState.loginForm,
			isLoading: true
		}
	})],
};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
};

