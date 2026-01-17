import LoginPage from '../pages/login.page.js'
const loginPage = new LoginPage()

describe('landing page spec', () => {
    it('opens on login page', () => {
        cy.visit(Cypress.env('baseUrl') + '#/login')
        cy.request(Cypress.env('baseUrl') + '#/login')
            .should('have.property', 'status', 200);
    })
    it('create new user', () => {
        cy.login('customer',{ create: true })
    });
    it('login with user', () => {
       cy.login()
    });

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