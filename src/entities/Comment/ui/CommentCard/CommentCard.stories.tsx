import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/decorators/NewDesignDecorator';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comments/CommentCard',
    component: CommentCard,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

const args = {
    comment: {
        id: '1',
        user: { id: '1', username: 'user 1' },
        text: 'comment user 1',
    },
};

export const Primary: Story = {
    args,
};

export const PrimaryRedesigned: Story = {
    args,
    decorators: [NewDesignDecorator(), ThemeDecorator(Theme.LIGHT)],
};

export const PrimaryRedesignedDark: Story = {
    args,
    decorators: [NewDesignDecorator(), ThemeDecorator(Theme.DARK)],
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

export const Dark: Story = {
    args: {
        comment: {
            id: '1',
            user: { id: '1', username: 'user 1' },
            text: 'comment user 1',
        },
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const LoadingDark: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
