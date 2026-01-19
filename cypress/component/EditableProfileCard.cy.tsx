import { EditableProfileCard } from '@/features/EditableProfileCard';

const USER_ID = '1'

describe('EditableProfileCard.tsx', () => {
    it('playground', () => {
        // example
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' })
        // cy.mount(<TestProvider options={{
        //     initialState: {
        //         user: {
        //             authData: {
        //                 id: USER_ID
        //             }
        //         }
        //     }
        // }}><EditableProfileCard id={ USER_ID }/></TestProvider>)
        cy.mount(<EditableProfileCard id={ USER_ID } />, {
            initialState: {
                user: {
                    authData: { id: USER_ID }
                }
            }
        });
    })
}) 