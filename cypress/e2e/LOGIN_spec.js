describe('landing page spec', () => {
    it('opens on login page', () => {
        cy.request(Cypress.env('baseUrl') + '#/login')
            .should('have.property', 'status', 200);
    })

    it('create new user', () => {
        cy.visit(Cypress.env('baseUrl') + '#/login')
        cy.get('#newCustomerLink').click()
        cy.request(Cypress.env('baseUrl') + '/undefined#/register')
            .should('have.property', 'status', 200)

        cy.get('#emailControl').type(Cypress.env('userEmail'))
        cy.get('#passwordControl').type(Cypress.env('userPassword'))
        cy.get('#repeatPasswordControl').type(Cypress.env('userPassword'))
        cy.get('.mat-mdc-select-placeholder').click({ force: true })
        cy.get('#mat-option-0').click({ force: true })
        cy.get('#securityAnswerControl').type('abc{enter}')
    })

    it('login with user', () => {
        cy.visit(Cypress.env('baseUrl') + '#/login')
        cy.get('[name="email"]').type(Cypress.env('userEmail'))
        cy.get('[name="password"]').type(Cypress.env('userPassword'))
        cy.get('#loginButton > .mat-mdc-button-touch-target').click({force:true})
    })

    it.skip('basic cybersecurity headers', () => {
        cy.visit(Cypress.env('baseUrl') + '#/login')
        cy.checkHeaders('/#/login');

    })

})