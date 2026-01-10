const user = {
    email: Cypress.env('userEmail'),
    password: Cypress.env('userPassword')
}
const user2 = {
    email: Cypress.env('userEmail'),
    password: 'WrongPassword!'
}

describe('landing page spec', () => {
    it('opens on login page', () => {
        cy.visit(Cypress.env('baseUrl') + '#/login')
        cy.request(Cypress.env('baseUrl') + '#/login')
            .should('have.property', 'status', 200);
    })

    // it('create new user', () => {
    //     cy.login({
    //         email: Cypress.env('userEmail'),
    //         password: Cypress.env('userPassword')
    //     },
    //         { create: true });
    // })

    // it('login with user', () => {
    //     cy.login({
    //         email: Cypress.env('userEmail'),
    //         password: Cypress.env('userPassword')
    //     },
    //         { create: false });

    // });
    // it('login/logout', () => {
    //     cy.login({
    //         email: Cypress.env('userEmail'),
    //         password: Cypress.env('userPassword')
    //     },
    //         { create: false });
    //     cy.logout()
    // })
    // it('login with invalid', () => {
    //     cy.login({
    //         email: Cypress.env('userEmail'),
    //         password: user2.password
    //     },
    //         { create: false });
    //     cy.get('.error').should('be.visible');

    // })

    // it('session persistence', () => {
    //     cy.loginSession(user)

    // })
    it.skip('basic cybersecurity headers', () => {
        cy.visit(Cypress.env('baseUrl') + '#/login')
        cy.checkHeaders('/#/login');

    })

})