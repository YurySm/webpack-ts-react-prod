import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
    title: '_/NotificationItem',
    component: NotificationItem,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {
    args: {},
};
