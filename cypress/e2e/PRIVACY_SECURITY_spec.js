
import LoginPage from '../pages/login.page.js'
import SideBarPage from '../pages/sidebar.page.js'

const loginPage = new LoginPage()
const sideBarPage = new SideBarPage()



describe('landing page spec', () => {
    it('opens on landing page', () => {
      cy.request(Cypress.config('baseUrl'))
        .should('have.property', 'status', 200);
    })
    it('opens on navbar page > orders & payment > order history', () => {
      cy.login()
      cy.get('#navbarAccount > .mat-mdc-button-touch-target').click({ force: true })
      cy.get('.mat-mdc-menu-content > [aria-label="Show Orders and Payment Menu"]').click({ force: true })
      cy.get('[routerlink="/order-history"]').click({ force: true })
    })
    it('opens on navbar page > orders & payment > recycle', () => {
      cy.login()
      cy.get('#navbarAccount > .mat-mdc-button-touch-target').click({ force: true })
      cy.get('.mat-mdc-menu-content > [aria-label="Show Orders and Payment Menu"]').click({ force: true })
      cy.get('[routerlink="/recycle"]').click({ force: true })
    })
    it('opens on navbar page > orders & payment >saved addresses', () => {
      cy.login()
      cy.get('#navbarAccount > .mat-mdc-button-touch-target').click({ force: true })
      cy.get('.mat-mdc-menu-content > [aria-label="Show Orders and Payment Menu"]').click({ force: true })
      cy.get('[routerlink="/address/saved"]').click({ force: true })
    })
    it('opens on navbar page > orders & payment >payment options', () => {
      cy.login()
      cy.get('#navbarAccount > .mat-mdc-button-touch-target').click({ force: true })
      cy.get('.mat-mdc-menu-content > [aria-label="Show Orders and Payment Menu"]').click({ force: true })
      cy.get('[routerlink="/saved-payment-methods"]').click({ force: true })
    })
    it('opens on navbar page > orders & payment > digital wallet', () => {
      cy.login()
      cy.get('#navbarAccount > .mat-mdc-button-touch-target').click({ force: true })
      cy.get('.mat-mdc-menu-content > [aria-label="Show Orders and Payment Menu"]').click({ force: true })
      cy.get('[routerlink="/wallet"]').click({ force: true })
    })
    it('opens on navbar page > privacy & security', () => {
      cy.login()
    })
    it('opens on sidebar page', () => {
      cy.get('.mdc-icon-button > .mat-icon').click({ force: true })
      cy.get('.mat-mdc-nav-list').should('be.visible')
    })


    // it.skip('basic cybersecurity headers', () => {
    //   cy.checkHeaders('/#/');

    // })

  
})