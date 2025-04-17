import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
    title: '_/Page',
    component: Page,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {
    args: {},
};
