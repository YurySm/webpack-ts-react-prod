import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
	// parameters: {
	//     layout: 'centered',
	// },
	// tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
	// args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
	args: {
		children: 'Link',
		theme: AppLinkTheme.PRIMARY,
	},
};

export const PrimaryDark: Story = {
	args: {
		children: 'Link',
		theme: AppLinkTheme.PRIMARY,
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};
 
export const Secondary: Story = {
	args: {
		children: 'Link',
		theme: AppLinkTheme.SECONDARY,
	},
};

export const SecondaryDark: Story = {
	args: {
		children: 'Link',
		theme: AppLinkTheme.PRIMARY,
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};
