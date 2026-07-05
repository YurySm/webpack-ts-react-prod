import type { Meta, StoryObj } from '@storybook/react';
import { FilterContainers } from './FilterContainers';

const meta: Meta<typeof FilterContainers> = {
    title: '_/FilterContainers',
    component: FilterContainers,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FilterContainers>;

export const Primary: Story = {
    args: {},
};
