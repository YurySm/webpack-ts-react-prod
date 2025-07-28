import type { Meta, StoryObj } from '@storybook/react';
import { NotificationsList } from './NotificationsList';

const meta: Meta<typeof NotificationsList> = {
    title: '_/NotificationsList',
    component: NotificationsList,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotificationsList>;

export const Primary: Story = {
    args: {},
};
