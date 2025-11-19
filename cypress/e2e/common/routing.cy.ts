
describe('Роутинг', () => {
    describe('Пользователь не авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/')
            cy.getByTestId('MainPage').should('exist');
        })
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1')
            cy.getByTestId('MainPage').should('exist');
        })
        it('Переход на несуществующую страницу', () => {
            cy.visit('/test')
            cy.getByTestId('NotFoundPage').should('exist');
        })
    })
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('admin', '123')
        })
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1')
            cy.getByTestId('ProfilePage').should('exist');
        })
        it('Переход на страницу списка статей', () => {
            cy.visit('/articles')
            cy.getByTestId('ArticlesPage').should('exist');
        })
    })
})