
import LoginPage from '../pages/login.page.js'
import SideBarPage from '../pages/sidebar.page.js'

const loginPage = new LoginPage()
const sideBarPage = new SideBarPage()



describe('landing page spec', () => {
  it('opens on landing page', () => {
    cy.request(Cypress.config('baseUrl'))
      .should('have.property', 'status', 200);
  })
  it('opens on navbar page > privacy & security > privacy policy', () => {
    cy.login()
    cy.get('#navbarAccount > .mat-mdc-button-touch-target').click({ force: true })
    cy.get('.mat-mdc-menu-content > [aria-label="Show Privacy and Security Menu"]').click({ force: true })
    cy.get('[aria-label="Go to privacy policy page"]').click({ force: true })
    cy.get('h1').should('be.visible')
  })
  it('opens on navbar page > privacy & security > request data export', () => {
    cy.login()
    cy.get('#navbarAccount > .mat-mdc-button-touch-target').click({ force: true })
    cy.get('.mat-mdc-menu-content > [aria-label="Show Privacy and Security Menu"]').click({ force: true })
    cy.get('[aria-label="Go to data export page"]').click({ force: true })
    cy.get('h1').should('be.visible')
  })
  it('opens on navbar page > privacy & security > request data erasure', () => {
    cy.login()
    cy.get('#navbarAccount > .mat-mdc-button-touch-target').click({ force: true })
    cy.get('.mat-mdc-menu-content > [aria-label="Show Privacy and Security Menu"]').click({ force: true })
    cy.get('[aria-label="Go to data subject page"]').click({ force: true })
    cy.get('h4').should('be.visible')
  })
  it('opens on navbar page > privacy & security > change password ', () => {
    cy.login()
    cy.get('#navbarAccount > .mat-mdc-button-touch-target').click({ force: true })
    cy.get('.mat-mdc-menu-content > [aria-label="Show Privacy and Security Menu"]').click({ force: true })
    cy.get('[aria-label="Go to change password page"]').click({ force: true })
    cy.get('h1').should('be.visible')
  })
  it('opens on navbar page > privacy & security > 2fa configuration', () => {
    cy.login()
    cy.get('#navbarAccount > .mat-mdc-button-touch-target').click({ force: true })
    cy.get('.mat-mdc-menu-content > [aria-label="Show Privacy and Security Menu"]').click({ force: true })
    cy.get('[aria-label="Go to data export page"]').click({ force: true })
    cy.get('h1').should('be.visible')
  })
  it('opens on navbar page > privacy & security > last login ip', () => {
    cy.login()
    cy.get('#navbarAccount > .mat-mdc-button-touch-target').click({ force: true })
    cy.get('.mat-mdc-menu-content > [aria-label="Show Privacy and Security Menu"]').click({ force: true })
    cy.get('[aria-label="Go to last login ip page"]').click({ force: true })
    cy.get('h1').should('be.visible')
  })



  // it.skip('basic cybersecurity headers', () => {
  //   cy.checkHeaders('/#/');

  // })


})