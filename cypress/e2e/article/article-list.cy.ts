
describe('Пользователь заходит на страницу статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('/articles');
        })
    })
    it('И статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    })

    it('И статьи успешно подгружаются на стабах(фикстуры)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' })
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    })

    it.skip('Пример скипа', () => {
        cy.get('qwerty').should('exist')
    })
}) 