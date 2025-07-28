import type { Meta, StoryObj } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';

const meta: Meta<typeof AvatarDropdown> = {
    title: '_/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Primary: Story = {
    args: {},
};
