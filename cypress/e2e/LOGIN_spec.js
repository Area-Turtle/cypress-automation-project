const user = {
    email: Cypress.env('userEmail'),
    password: Cypress.env('userPassword')
}
const user2 = {
    email: Cypress.env('userEmail'),
    password: 'WrongPassword!'
}
function loginTemp(user, create) {
    cy.visit(Cypress.env('baseUrl') + '#/login')
    if (create) {
        // Register new user
        cy.visit('/undefined#/register');
        cy.get('#emailControl')
            .should('be.visible').type(user.email);
        cy.get('#passwordControl')
            .should('be.visible').type(user.password);
        cy.get('#repeatPasswordControl')
            .should('be.visible').type(user.password);

        cy.get('.mat-mdc-select-placeholder')
            .should('be.visible').click({ force: true });
        cy.get('#mat-option-0')
            .should('be.visible').click({ force: true });
        cy.get('#securityAnswerControl')
            .should('be.visible').type('abc');
        cy.get('#registerButton')
            .should('be.visible').click({ force: true });
    } else {
        // Login existing user
        cy.get('[name="email"]')
            .should('be.visible').type(user.email);
        cy.get('[name="password"]')
            .should('be.visible').type(user.password);
        cy.get('#loginButton')
            .should('be.visible').click({ force: true });
    }
}


describe('landing page spec', () => {
    it('opens on login page', () => {
        cy.visit(Cypress.env('baseUrl') + '#/login')
        cy.request(Cypress.env('baseUrl') + '#/login')
            .should('have.property', 'status', 200);
    })

    it('create new user', () => {
        loginTemp({
            email: Cypress.env('userEmail'),
            password: Cypress.env('userPassword')
        },
        { create: true });
    });

    it('login with user', () => {
        cy.login({
            email: Cypress.env('userEmail'),
            password: Cypress.env('userPassword')
        },
            { create: false });

    });
    it('login/logout', () => {
        cy.login({
            email: Cypress.env('userEmail'),
            password: Cypress.env('userPassword')
        },
            { create: false });
            cy.wait(1000)
        cy.logout()
    })
    it('login with invalid', () => {
        cy.login({
            email: Cypress.env('userEmail'),
            password: user2.password
        },
            { create: false });
        //cy.get('.error').should('be.visible');

    })

    it('session persistence', () => {
        cy.loginSession(user)

    })
    // it.skip('basic cybersecurity headers', () => {
    //     cy.visit(Cypress.env('baseUrl') + '#/login')
    //     cy.checkHeaders('/#/login');

    // })

})