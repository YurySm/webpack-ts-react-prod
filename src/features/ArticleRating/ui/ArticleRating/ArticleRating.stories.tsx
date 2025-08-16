import type { Meta, StoryObj } from '@storybook/react';
import  ArticleRating  from './ArticleRating';

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Primary: Story = {
    args: {},
};
