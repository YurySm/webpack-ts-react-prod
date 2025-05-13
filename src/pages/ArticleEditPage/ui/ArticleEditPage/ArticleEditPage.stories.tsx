import type { Meta, StoryObj } from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
    title: '_/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Primary: Story = {
    args: {},
};
