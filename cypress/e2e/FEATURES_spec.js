import LoginPage from '../pages/login.page.js'
const loginPage = new LoginPage()

describe('features test spec', () => {
    // it('opens on landing page', () => {
    //     cy.request(Cypress.config('baseUrl'))
    //         .should('have.property', 'status', 200);
    // })

    it('add to basket', () => {
        cy.login()
        cy.request(Cypress.config('baseUrl'))
            .should('have.property', 'status', 200);
        // cy.get('.mat-grid-tile-content > .mat-mdc-card > .mdc-card > .basket-btn-container > .mdc-button > .mat-mdc-button-touch-target')
        //     .select(0)
        //cy.get('.mdc-button.ng-star-inserted > .mdc-button__label > .hide-lt-md').click({force:true})
        
    })
    it('delete item', () => {
        cy.request(Cypress.config('baseUrl'))
            .should('have.property', 'status', 200);
    })

    it('write review', () => {
        cy.request(Cypress.config('baseUrl'))
            .should('have.property', 'status', 200);
    })

    it('checkout', () => {
        cy.request(Cypress.config('baseUrl'))
            .should('have.property', 'status', 200);
    })

    it.skip('basic cybersecurity headers', () => {
        cy.checkHeaders('/#/');

    })

})