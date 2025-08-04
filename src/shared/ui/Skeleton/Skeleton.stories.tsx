import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
    args: {
        width: '100%',
        height: 100,
    },
};

export const Circle: Story = {
    args: {
        width: 100,
        height: 100,
        borderRadius: '50%'
    },
};

export const NormalDark: Story = {
    args: {
        width: '100%',
        height: 100,
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const CircleDark: Story = {
    args: {
        width: 100,
        height: 100,
        borderRadius: '50%'
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const NormalViolet: Story = {
    args: {
        width: '100%',
        height: 100,
    },
    decorators: [
        ThemeDecorator(Theme.VIOLET)
    ]
};

export const CircleViolet: Story = {
    args: {
        width: 100,
        height: 100,
        borderRadius: '50%'
    },
    decorators: [
        ThemeDecorator(Theme.VIOLET)
    ]
};
