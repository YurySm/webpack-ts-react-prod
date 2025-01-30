import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	// parameters: {
	//     layout: 'centered',
	// },
	tags: ['autodocs'],
	// // argTypes: {
	// //     backgroundColor: { control: 'color' },
	// // },
	args: { onClick: fn() },
}; 

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Button',
	},
};

export const Clear: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.CLEAR,
	},
};
