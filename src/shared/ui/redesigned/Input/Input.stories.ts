import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
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
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: 'Введите тест',
    },
};
