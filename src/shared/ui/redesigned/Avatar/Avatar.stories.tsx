import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import avatarImg from '@/shared/assets/tests/storybook.png';

const meta: Meta<typeof Avatar> = {
    title: 'shared/redesigned/Avatar',
    component: Avatar,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        src: avatarImg,
        alt: 'Primary',
        size: 150,
    },
};

export const Small: Story = {
    args: {
        src: avatarImg,
        alt: 'Small',
        size: 50,
    },
};
