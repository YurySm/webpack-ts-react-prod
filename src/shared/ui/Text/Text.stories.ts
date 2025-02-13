import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
	title: 'shared/Text',
	component: Text,
	// parameters: {
	//     layout: 'centered',
	// },
	tags: ['autodocs'],
	// // argTypes: {
	// //     backgroundColor: { control: 'color' },
	// // },
	// args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
	args: {
		title: 'Title',
		text: 'text',
	},
};

export const Error: Story = {
	args: {
		title: 'Title',
		text: 'text',
		theme: TextTheme.ERROR,
	},
};

export const PrimaryDark: Story = {
	args: {
		title: 'Title',
		text: 'text',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
	args: {
		title: 'Title',
	},
};

export const OnlyTitleDark: Story = {
	args: {
		title: 'Title',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyText: Story = {
	args: {
		text: 'text',
	},
};

export const OnlyTextDark: Story = {
	args: {
		text: 'text',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
