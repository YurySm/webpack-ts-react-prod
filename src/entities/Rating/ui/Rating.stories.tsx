import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
    title: '_/Rating',
    component: Rating,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Primary: Story = {
    args: {},
};
