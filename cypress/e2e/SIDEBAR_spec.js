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
    sideBarPage.navigateToSideBar()
  })
  it('selects sidebar and text says contact', () => {
    cy.request(Cypress.env('baseUrl') + '#/login')
      .should('have.property', 'status', 200);
    sideBarPage.navigateToSideBar()
    cy.get('body > app-root > mat-sidenav-container > mat-sidenav > div > sidenav > mat-nav-list > h3:nth-child(5)').contains('Contact')
  })
  it('selects sidebar and text says company', () => {
    cy.request(Cypress.env('baseUrl') + '#/login')
      .should('have.property', 'status', 200);
    sideBarPage.navigateToSideBar()
    cy.get('body > app-root > mat-sidenav-container > mat-sidenav > div > sidenav > mat-nav-list > h3:nth-child(8)').contains('Company')
  })
  it('selects sidebar and footer says owasp juice shop', () => {
    cy.request(Cypress.env('baseUrl') + '#/login')
      .should('have.property', 'status', 200);
    sideBarPage.navigateToSideBar()
    cy.get('body > app-root > mat-sidenav-container > mat-sidenav > div > sidenav > div > span > span:nth-child(1)').contains('OWASP Juice Shop')
  })
  it('selects sidebar and footer says v19.1.1', () => {
    cy.request(Cypress.env('baseUrl') + '#/login')
      .should('have.property', 'status', 200);
    sideBarPage.navigateToSideBar()
    cy.get('body > app-root > mat-sidenav-container > mat-sidenav > div > sidenav > div > span > span:nth-child(3)').contains('v19.1.1')
  })
  it('completes customer feedback form', () => {
    sideBarPage.navigateToFeedBack('test input')
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
      loginPage.login(customer, { create: false })
      sideBarPage.navigateToComplaints(customer.email, 'abc')
    })

  })

  // })
  it('should block non-customers from chatbot page', () => {
    // Log in as a normal user
    cy.tabExists('chatbot').then(exists => {
      if (exists) {
        sideBarPage.navigateToSupportChat()
      } else {
        cy.log('Tab not available — skipping click')
      }

    })
  })
  it('should allow customers to access chatbot page', () => {
    //Log in as admin
    cy.login()
    sideBarPage.navigateToSupportChat('hello my name is jeff')

  });

  it('opens on about us page', () => {
    sideBarPage.navigateToAboutUs()
    //cy.get('#corporate-history').should('be.visible')
  })
  it('opens on photo wall page', () => {
    sideBarPage.navigateToPhotoWall()
  })

  it('should block non-customers from deluxe page', () => {
    // Log in as a normal user
    cy.tabExists('deluxe').then(exists => {
      if (exists) {
        sideBarPage.navigateToDeluxe()
      } else {
        cy.log('Tab not available — skipping click')
      }
    })

  })

  it('opens on deluxe membership page', () => {
    cy.request(Cypress.env('baseUrl') + '#')
      .should('have.property', 'status', 200);
    cy.login()
    //(text, card, month, year, number)
    const card = ['abc', '1234123412341234', '1', '2', 4]
    sideBarPage.navigateToDeluxe(card[0], card[1], card[2], card[3], card[4])
    // cy.fixture('testUsers').then(testUsers => {
    //   const admin = {
    //     email: testUsers.admin.email,
    //     password: testUsers.admin.password
    //   }
    //   loginPage.login(admin, { create: false })
    //   sideBarPage.navigateToDeluxe()
    //   cy.get('.deluxe-membership > .card-text > .item-name').should('be.visible')
    // })
  });

  // // it.skip('login with user', () => {
  // //   cy.fixture('testUsers').then(testUsers => {
  // //     const customer = {
  // //       email: Cypress.env(testUsers.customer.email),
  // //       password: Cypress.env(testUsers.customer.password)
  // //     }
  // //     cy.login(customer, { create: false })
  // //     cy.sidebarAccess('deluxe-membership')
  // //     cy.get('.deluxe-membership > .card-text > .item-name').should('be.visible')
  // //   })
  // //   cy.visit('/#/administration')
  // //   cy.contains('Administration').should('be.visible')
  // // });
  // // it.skip('basic cybersecurity headers', () => {
  // //   cy.checkHeaders('#/contact');
  // // })
})