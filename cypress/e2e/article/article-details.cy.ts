let currentArticleId = ''

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then(article => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        })
    })

    afterEach(() => {
        cy.deleteArticle(currentArticleId)
    })


    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist')
    })
}) 