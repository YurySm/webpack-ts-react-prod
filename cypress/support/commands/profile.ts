import { selectByTestId } from '../../helpers/selectByTestId';

export function updateProfile(firstName: string, lastName: string) {
    cy.get(selectByTestId('EditableProfileCardHeader.EditButton')).click();
    cy.getByTestId('ProfileCard.FirstName').clear().type(firstName);
    cy.getByTestId('ProfileCard.LastName').clear().type(lastName);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
}

export function resetProfile(profileId: string)  {
    cy.request({
        method: 'PUT',
        url: `http://localhost:5000/profile/${profileId}`,
        headers: { Authorization: `string` },
        body: {
            'id': '4',
            'firstName': 'Test',
            'lastName': 'Test',
            'age': 99,
            'currency': 'EUR',
            'country': 'Russia',
            'city': 'Moscow',
            'username': 'testuser',
            'avatar': 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
        },
    })
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            updateProfile(firstName: string, lastName: string): Chainable<void>
            resetProfile(profileId: string): Chainable<void>
        }
    }
}