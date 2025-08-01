import type { Meta, StoryObj } from '@storybook/react';
import { NotificationButton } from './NotificationButton';

const meta: Meta<typeof NotificationButton> = {
    title: '_/NotificationButton',
    component: NotificationButton,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Primary: Story = {
    args: {},
};
