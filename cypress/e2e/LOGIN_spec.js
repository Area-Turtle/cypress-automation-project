import LoginPage from '../pages/login.page.js'
const loginPage = new LoginPage()

describe('landing page spec', () => {
    it('opens on login page', () => {
        cy.visit(Cypress.env('baseUrl') + '#/login')
        cy.request(Cypress.env('baseUrl') + '#/login')
            .should('have.property', 'status', 200);
    })
    it('create new user', () => {
        cy.login('customer', { create: true })
    });
    it('login with user', () => {
        cy.login()
    });
    it('checks if basket text is correct on landing page', () => {
        cy.login()
        cy.get('#homeButton').click()
        cy.get('body > app-root > mat-sidenav-container > mat-sidenav-content > app-navbar > mat-toolbar > mat-toolbar-row > button.mdc-button.mat-mdc-button-base.buttons.mat-mdc-button.mat-unthemed.ng-star-inserted > span.mdc-button__label > span.hide-lt-md')
            .should('be.visible')
            .contains('Your Basket')
    })

    it('login/logout', () => {
        cy.login()
        cy.logout()
    })
    it('login with invalid', () => {
        cy.fixture('testUsers').then(testUsers => {
            const customer = {
                email: Cypress.env(testUsers.customer.email),
                password: 'wrongPassword!'
            }
            loginPage.login(customer, { create: false })
        })
        cy.get('.error').should('be.visible');

    })

    it('session persistence', () => {
        cy.login()

    })


    it.skip('basic cybersecurity headers', () => {
        cy.visit(Cypress.env('baseUrl') + '#/login')
        cy.checkHeaders('/#/login');

    })

})