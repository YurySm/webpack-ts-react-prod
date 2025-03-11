import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'Primary',
        options: [
            {
                value: 'test1',
                label: 'Test 1',
            },
            {
                value: 'test2',
                label: 'Test 2',
            }
        ]
    },
};
