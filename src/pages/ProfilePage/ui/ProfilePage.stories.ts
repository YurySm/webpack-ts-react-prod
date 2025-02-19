import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};
