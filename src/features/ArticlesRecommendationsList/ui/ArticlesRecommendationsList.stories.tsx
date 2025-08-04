import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesRecommendationsList } from './ArticlesRecommendationsList';
import { Article } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { http, HttpResponse } from 'msw'

const article = {
    'id': '1',
    'title': 'Javascript news news news news news',
    'subtitle': 'Что нового в JS в 2025?',
    'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1280px-Unofficial_JavaScript_logo_2.svg.png',
    'views': 123,
    'createdAt': '15.03.2025',
    'user': {
        'id': '1',
        'username': 'admin',
        'avatar': 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
    },
    'type': ['IT'],
    'blocks': [
        {
            'id': '1',
            'type': 'TEXT',
            'title': 'Заголовок этого блока',
            'paragraphs': [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ]
        }
    ]
} as Article

const meta: Meta<typeof ArticlesRecommendationsList> = {
    title: 'features/ArticlesRecommendationsList',
    component: ArticlesRecommendationsList,
    argTypes: {},
    decorators: [
        StoreDecorator({

        })
    ],
    parameters: {
        msw: {
            handlers: [
                http.get('/articles?_limit=3', () => {
                    return HttpResponse.json([
                        article,
                        { ...article, id: '2' },
                        { ...article, id: '3' },
                    ])
                }),
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof ArticlesRecommendationsList>;

export const Primary: Story = {
    args: {},
};
