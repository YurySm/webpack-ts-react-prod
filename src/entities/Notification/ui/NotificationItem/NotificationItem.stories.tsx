import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const WithHref: Story = {
    args: {
        notification: {
            id: '1',
            href: 'https://google.com/',
            title: 'google',
            description: 'come example',
        }
    },
};

export const WithoutHref: Story = {
    args: {
        notification: {
            id: '1',
            title: 'google',
            description: 'come example',
        }
    },
};

