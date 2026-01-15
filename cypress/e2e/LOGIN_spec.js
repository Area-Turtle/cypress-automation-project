import LoginPage from '../pages/login.page.js'
const loginPage = new LoginPage()

describe('landing page spec', () => {
    it('opens on login page', () => {
        cy.visit(Cypress.env('baseUrl') + '#/login')
        cy.request(Cypress.env('baseUrl') + '#/login')
            .should('have.property', 'status', 200);
    })
    it('loginPOM with user', () => {
        cy.fixture('testUsers').then(testUsers => {
            const customer = {
                email: Cypress.env(testUsers.customer.email),
                password: Cypress.env(testUsers.customer.password)
            }
            loginPage.login(customer, { create: true })
        })
    });
    it('loginPOM with user', () => {
        cy.fixture('testUsers').then(testUsers => {
            const customer = {
                email: Cypress.env(testUsers.customer.email),
                password: Cypress.env(testUsers.customer.password)
            }
            loginPage.login(customer, { create: false })
        })
    });

    it('login/logout', () => {
        cy.fixture('testUsers').then(testUsers => {
            const customer = {
                email: Cypress.env(testUsers.customer.email),
                password: Cypress.env(testUsers.customer.password)
            }
            loginPage.login(customer, { create: false })
        })
        cy.wait(1000)
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
        cy.fixture('testUsers').then(testUsers => {
            const customer = {
                email: Cypress.env(testUsers.customer.email),
                password: Cypress.env(testUsers.customer.password)
            }
            // cy.login(customer, { create: false })
            loginPage.login(customer, { create: false })
        })

    })


    it.skip('basic cybersecurity headers', () => {
        cy.visit(Cypress.env('baseUrl') + '#/login')
        cy.checkHeaders('/#/login');

    })

})