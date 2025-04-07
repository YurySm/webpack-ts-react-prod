import type { Meta, StoryObj } from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    args: {}
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({
            articleDetailsComments: {
                isLoading: false,
                error: undefined,
                ids: ['1'],
                entities: {
                    '1': {
                        id: '1',
                        text: 'comment user 1',
                        user: { id: '1', username: 'user 1' },
                    }
                }
            }
        })
    ]
};

export const IsLoading: Story = {
    decorators: [
        StoreDecorator({
            articleDetailsComments: {
                isLoading: true,
                error: undefined,
                ids: [],
                entities: { }
            }
        })
    ]
};

