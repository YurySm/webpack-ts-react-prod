import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';

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
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};
 