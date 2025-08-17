import type { Meta, StoryObj } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { http, HttpResponse } from 'msw';

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {},
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '2',
                    username: 'test'
                }
            }
        })
    ]
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const WithRate: Story = {
    args: {
        articleId: '1'
    },
    parameters: {
        msw: {
            handlers: [
                http.get('/articles-ratings?userId=2&articleId=1', () => {
                    return HttpResponse.json([{
                        rate: 3
                    }])
                }),
            ],
        },
    },
};

export const WithoutRate: Story = {
    args: {
        articleId: '1'
    },
    parameters: {
        msw: {
            handlers: [
                http.get('/articles-ratings?userId=2&articleId=1', () => {
                    return HttpResponse.json([])
                }),
            ],
        },
    },
};
