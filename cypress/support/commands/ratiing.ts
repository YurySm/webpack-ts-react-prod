
export function setRate(rate: number, comment: string)  {
    cy.getByTestId('StarRating.' + rate).click()
    cy.getByTestId('RatingCard.Input').type(comment)
    cy.getByTestId('RatingCard.SendButton').click()
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            setRate(rate: number, comment: string): Chainable<void>
        }
    }
}