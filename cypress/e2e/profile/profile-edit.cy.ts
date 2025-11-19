let profileId = ''
describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login().then(user => {
            cy.visit(`/profile/${user?.id}`);
            profileId = user?.id;
        })
    })

    afterEach(() => {
        cy.resetProfile(profileId)
    })

    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.FirstName').should('have.value', 'Test');
    })
    it('И редактирует его', () => {
        cy.updateProfile('firstName', 'lastName');
        cy.getByTestId('ProfileCard.FirstName').should('have.value', 'firstName');
        cy.getByTestId('ProfileCard.LastName').should('have.value', 'lastName');
    })
}) 