import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesRecommendationsList } from './ArticlesRecommendationsList';

const meta: Meta<typeof ArticlesRecommendationsList> = {
    title: '_/ArticlesRecommendationsList',
    component: ArticlesRecommendationsList,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesRecommendationsList>;

export const Primary: Story = {
    args: {},
};
