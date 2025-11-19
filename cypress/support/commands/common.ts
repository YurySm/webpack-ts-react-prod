import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/constants/localstorage';
import { User } from '../../../src/entities/User';
import { selectByTestId } from '../../helpers/selectByTestId';

export function getByTestId(testId: string) {
    return cy.get(selectByTestId(testId))
}

export function login(username: string = 'testuser', password: string = '123')  {
    return cy.request({
        method: 'POST',
        url: `http://localhost:5000/login`,
        body: {
            username,
            password,
        },
    }).then(({ body }) => {

        window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body))

        return body
    })
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
        }
    }
}