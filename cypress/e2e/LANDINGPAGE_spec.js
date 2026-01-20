
import LoginPage from '../pages/login.page.js'
import SideBarPage from '../pages/sidebar.page.js'
import HeaderPage from '../pages/header.page.js'

const loginPage = new LoginPage()
const sideBarPage = new SideBarPage()
const headerPage = new HeaderPage()


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
    sideBarPage.navigateToSideBar()
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
    const address = ['1','1','1231231234','1','1','1',4]
    headerPage.navigateToSavedAddressess(address[0],address[1],address[2],address[3],address[4],address[5],address[6],)
  })
  it('opens on navbar page > orders & payment >payment options', () => {
    const card = ['abc','1234123412341234','1','2',4]
    headerPage.navigateToPaymentOptions(card[0],card[1],card[2],card[3],card[4])
  })
  it('opens on navbar page > orders & payment > digital wallet', () => {
    headerPage.navigateToDigitalWallet('10')
  })

  //privacy navbar section
  it('opens on navbar page > privacy & security > privacy policy', () => {
    headerPage.navigateToPrivacyPolicy()
  })
  it('opens on navbar page > privacy & security > request data export', () => {
    headerPage.navigateToDataExport()
  })
  it('opens on navbar page > privacy & security > request data erasure', () => {
    headerPage.navigateToDataErasure()
  })
  it('opens on navbar page > privacy & security > change password ', () => {
    headerPage.navigateToChangePassword()
  })
  it('opens on navbar page > privacy & security > 2fa configuration', () => {
    headerPage.navigateTo2faConfiguration()
  })
  it('opens on navbar page > privacy & security > last login ip', () => {
    headerPage.navigateToLoginIp()
  })

  // it.skip('basic cybersecurity headers', () => {
  //   cy.checkHeaders('/#/');

  // })


})