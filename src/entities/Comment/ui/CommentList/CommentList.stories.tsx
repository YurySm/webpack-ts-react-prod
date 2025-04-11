import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comments/CommentList',
    component: CommentList,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    args: {
        comments: [
            {
                id: '1',
                user: { id: '1', username: 'user 1' },
                text: 'comment user 1'
            },
            {
                id: '2',
                user: { id: '2', username: 'user 2' },
                text: 'comment user 2'
            }
        ]
    },
};

export const EmptyList: Story = {
    args: {
        comments: []
    },
};

export const Loading: Story = {
    args: {
        isLoading: true
    },
};