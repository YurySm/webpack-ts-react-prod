import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
    args: {
        tabs: [
            {
                value: 'tab-1',
                content: 'tab 1',
            },
            {
                value: 'tab-2',
                content: 'tab 2',
            },
            {
                value: 'tab-3',
                content: 'tab 3',
            },
        ],
        value: 'tab-1',
        onTabClick: action('onTabClick'),
    },
};
