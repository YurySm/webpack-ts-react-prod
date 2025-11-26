import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    'title': 'Test Article',
    'subtitle': 'Что нового в JS в 2025?',
    'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1280px-Unofficial_JavaScript_logo_2.svg.png',
    'views': 973,
    'createdAt': '09.01.2022',
    'userId': '1',
    'type': [
        'SCIENCE'
    ],
    'blocks': []
};

export function createArticle(article?: Article) {
    return cy.request({
        method: 'POST',
        url: `http://localhost:5000/articles`,
        headers: { Authorization: `string` },
        body: article ?? defaultArticle,
    }).then(res => res.body)
}

export function deleteArticle(articleId: string)  {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:5000/articles/${articleId}`,
        headers: { Authorization: `string` },
    })
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>
            deleteArticle(articleId: string): Chainable<void>
        }
    }
}