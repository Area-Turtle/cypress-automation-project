function fillComplaint(message, user) {
  cy.get('#mat-input-4')
    .should('be.disabled').and('have.value', user.email)
  cy.get('#complaintMessage').type(message)
  //cy.get('#submitButton > .mat-mdc-button-touch-target').click({force:true})
}
function tabSelect(link) {
  cy.get('.mdc-icon-button > .mat-icon').click({ force: true })
  cy.get(`[routerlink="/${link}"]`).click({ force: true })
  cy.request(Cypress.env('baseUrl') + `#/${link}`)
    .should('have.property', 'status', 200);
  cy.get('.mat-mdc-card > .mdc-card').should('be.visible')
}
import LoginPage from '../pages/login.page.js'
import SideBarPage from '../pages/sidebar.page.js'
const loginPage = new LoginPage()
const sideBarPage = new SideBarPage()




describe('customer feedback spec', () => {
  it('selects sidebar and it opens', () => {
    cy.request(Cypress.env('baseUrl') + '#/login')
      .should('have.property', 'status', 200);
    cy.get('.mdc-icon-button > .mat-icon').click({ force: true })
  })

  it('completes customer feedback form', () => {
    sideBarPage.navigateToFeedBack()

  })

  it('should block non-customers from Complaint page', () => {
    // Log in as a normal user

    cy.tabExists('Complaint').then(exists => {
      if (exists) {
        sideBarPage.navigateToComplaints()
      } else {
        cy.log('Tab not available — skipping click')
      }
    })

  })

  it('should allow users to access Complaint page', () => {
    //Log in as admin
    cy.fixture('testUsers').then(testUsers => {
      const customer = {
        email: Cypress.env(testUsers.customer.email),
        password: Cypress.env(testUsers.customer.password)
      }
      cy.login(customer, { create: false })
      cy.sidebarAccess('complain')
      fillComplaint('abc', customer)
    })

  })
  it('should block non-customers from chatbot page', () => {
    // Log in as a normal user
    cy.tabExists('Complaint').then(exists => {
      if (exists) {
        cy.sidebarAccess('chatbot')
      } else {
        cy.log('Tab not available — skipping click')
      }

    })
  })
  it('should allow customers to access chatbot page', () => {
    //Log in as admin
    cy.fixture('testUsers').then(testUsers => {
      const customer = {
        email: Cypress.env(testUsers.customer.email),
        password: Cypress.env(testUsers.customer.password)
      }
      cy.login(customer, { create: false })
      cy.sidebarAccess('chatbot')
    })
  });

  it('opens on about us page', () => {
    cy.request(Cypress.env('baseUrl') + '#')
      .should('have.property', 'status', 200);
    tabSelect('about')
    cy.get('#corporate-history').should('be.visible')
  })
  it('opens on photo wall page', () => {
    cy.request(Cypress.env('baseUrl') + '#')
      .should('have.property', 'status', 200);
    tabSelect('photo-wall')
    cy.get('h1').should('be.visible')

  })

  it('should block non-customers from deluxe page', () => {
    // Log in as a normal user
    cy.tabExists('deluxe').then(exists => {
      if (exists) {
        cy.sidebarAccess('deluxe-membership')
      } else {
        cy.log('Tab not available — skipping click')
      }
    })

  })

  it('opens on deluxe membership page', () => {
    cy.request(Cypress.env('baseUrl') + '#/contact')
      .should('have.property', 'status', 200);
    cy.fixture('testUsers').then(testUsers => {
      const customer = {
        email: Cypress.env(testUsers.customer.email),
        password: Cypress.env(testUsers.customer.password)
      }
      cy.login(customer, { create: false })
      cy.sidebarAccess('deluxe-membership')
      cy.get('.deluxe-membership > .card-text > .item-name').should('be.visible')
    })
  });

// it.skip('login with user', () => {
//   cy.fixture('testUsers').then(testUsers => {
//     const customer = {
//       email: Cypress.env(testUsers.customer.email),
//       password: Cypress.env(testUsers.customer.password)
//     }
//     cy.login(customer, { create: false })
//     cy.sidebarAccess('deluxe-membership')
//     cy.get('.deluxe-membership > .card-text > .item-name').should('be.visible')
//   })
//   cy.visit('/#/administration')
//   cy.contains('Administration').should('be.visible')
// });
// it.skip('basic cybersecurity headers', () => {
//   cy.checkHeaders('#/contact');
// })
})