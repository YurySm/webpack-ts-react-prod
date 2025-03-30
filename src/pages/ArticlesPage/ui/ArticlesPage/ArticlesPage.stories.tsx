import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Primary: Story = {};
