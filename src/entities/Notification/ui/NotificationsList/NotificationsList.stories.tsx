import type { Meta, StoryObj } from '@storybook/react';
import { NotificationsList } from './NotificationsList';
import { http, HttpResponse } from 'msw';

const meta: Meta<typeof NotificationsList> = {
    title: 'entities/Notification/NotificationsList',
    component: NotificationsList,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotificationsList>;

export const Primary: Story = {
    args: {},
    parameters: {
        msw: {
            handlers: [
                http.get('/notifications', () => {
                    return HttpResponse.json([
                        {
                            id: '1',
                            title: 'google',
                            description: 'come example',
                        },
                        {
                            id: '2',
                            title: 'google',
                            description: 'come example',
                        },
                        {
                            id: '3',
                            title: 'google',
                            description: 'come example',
                            href: 'https://google.com/',
                        }
                    ])
                }),
            ],
        },
    },
};
