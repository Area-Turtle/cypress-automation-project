describe('landing page spec', () => {
    it('opens on login page', () => {
        cy.request(Cypress.env('baseUrl') + '#/login')
            .should('have.property', 'status', 200);
    })

    it('create new user', () => {
        cy.loginNewUser()
    })

    it('login with user', () => {
        cy.loginExistUser()
    })
    it('login with invalid', () => {

    })
    it('login/logout', () => {
  
    })

    it('session persistence', () => {

    })
    it.skip('basic cybersecurity headers', () => {
        cy.visit(Cypress.env('baseUrl') + '#/login')
        cy.checkHeaders('/#/login');

    })

})