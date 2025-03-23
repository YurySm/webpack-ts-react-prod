import type { Meta, StoryObj } from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const Primary: Story = {
    args: {},
};
