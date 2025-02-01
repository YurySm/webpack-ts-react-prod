import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
	title: 'pages/AboutPage',
	component: AboutPage,
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
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {}; 

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};
