describe('landing page spec', () => {
    it('opens on login page', () => {
        cy.request(Cypress.env('baseUrl') + '#/login')
            .should('have.property', 'status', 200);
    })

    it('create new user', () => {
        const userEmail = Cypress.env('userEmail');
        const userPassword = Cypress.env('userPassword');

        cy.log(userEmail);  // Logs '123@email.com'
        cy.log(userPassword);  // Logs 'Password1!'

        cy.visit(Cypress.env('baseUrl') + '#/login')
        cy.get('#newCustomerLink').click()
        cy.request(Cypress.env('baseUrl') + '/undefined#/register')
            .should('have.property', 'status', 200)

        // cy.log(password)
        // cy.log(email)
        cy.get('#emailControl').type(userEmail + '{enter}')
        cy.get('#passwordControl').type(userPassword + '{enter}')
        cy.get('#repeatPasswordControl').type(userPassword + '{enter}')
        cy.get('.mat-mdc-select-placeholder').click({ force: true })
        cy.get('#mat-option-0').click({ force: true })
        cy.get('#securityAnswerControl').type('abc{enter}')
    })

    it('login with user', () => {
        cy.visit(Cypress.env('baseUrl') + '#/login')
    })
    it('basic cybersecurity headers', () => {
        cy.visit(Cypress.env('baseUrl') + '#/login')
        cy.checkHeaders('/#/login');

    })

})