
import LoginPage from '../pages/login.page.js'
import SideBarPage from '../pages/sidebar.page.js'
import header from '../pages/header.page.js'

const loginPage = new LoginPage()
const sideBarPage = new SideBarPage()
const headerPage = new header()

const response = {
  headers: {
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
    "Content-Security-Policy": "default-src 'self'",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "no-referrer",
    "Permissions-Policy": "geolocation=(self)",
    "Cache-Control": "no-store",
    "Expect-CT": "max-age=86400, enforce, report-uri='https://example.com/report'",
    "Access-Control-Allow-Origin": "*"
  }
};



describe('landing page spec', () => {
  it('opens on landing page', () => {
    cy.request(Cypress.config('baseUrl'))
      .should('have.property', 'status', 200);
  })

  it('opens on navbar page > view login', () => {
    cy.login()
    cy.get('#navbarAccount > .mat-mdc-button-touch-target').click({ force: true })
    cy.get('.mat-mdc-menu-content > [aria-label="Go to user profile"]').click({ force: true })
    cy.get('.mdl-card__supporting-text > .mdl-cell--12-col').should('be.visible').contains('User Profile')
  })
  it('opens on sidebar page', () => {
    cy.get('.mdc-icon-button > .mat-icon').click({ force: true })
    cy.get('.mat-mdc-nav-list').should('be.visible')
  })
  it('opens on forward/reverse', () => {
    cy.request(Cypress.config('baseUrl'))
      .should('have.property', 'status', 200);
    sideBarPage.navigateToFeedBack('test input')
    cy.go('back')
    cy.url().should('not.include', '/contact')
    sideBarPage.navigateToAboutUs()
    cy.go('back')
    cy.url().should('not.include', '/about')
    cy.go('forward')
    cy.url().should('include', '/about')
    sideBarPage.navigateToFeedBack('test input2')
    cy.url().should('not.include', '/about')

  })

  //order navbar section
  it('opens on navbar page > orders & payment > order history', () => {
    headerPage.navigateToOrderHistory()
  })
  it('opens on navbar page > orders & payment > recycle', () => {
    headerPage.navigateToRecycle()
  })
  it('opens on navbar page > orders & payment >saved addresses', () => {
    headerPage.navigateToSavedAddressess()
  })
  it('opens on navbar page > orders & payment >payment options', () => {
    headerPage.navigateToPaymentOptions()
  })
  it('opens on navbar page > orders & payment > digital wallet', () => {
    headerPage.navigateToDigitalWallet()
  })

  // it.skip('basic cybersecurity headers', () => {
  //   cy.checkHeaders('/#/');

  // })


})