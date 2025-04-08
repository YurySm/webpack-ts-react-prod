import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItem } from './ArticleListItem';

const meta: Meta<typeof ArticleListItem> = {
    title: 'entities/ArticleListItem',
    component: ArticleListItem,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const Primary: Story = {
    args: {},
};
