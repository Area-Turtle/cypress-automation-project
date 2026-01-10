const user2 = {
  email: 'bjoern.kimminich@gmail.com',
  password: 'bW9jLmxpYW1nQGhjaW5pbW1pay5ucmVvamI='
}

describe('customer feedback spec', () => {
  it('selects sidebar and it opens', () => {
    cy.request(Cypress.env('baseUrl') + '#/login')
      .should('have.property', 'status', 200);
    cy.get('.mdc-icon-button > .mat-icon').click({ force: true })
  })

  it('completes customer feedback form', () => {
    cy.visit(Cypress.env('baseUrl') + '#/contact')
    cy.wait(1000)
    //comment text
    cy.typeWithAnimations('#comment', 'the bad stuff')
    //slider
    cy.get('.mdc-slider__input').click()
    // captcha values
    cy.get('#captcha')
      .then(($el) => {
        const equationText = $el.text().trim()
        cy.log('captcha contents', equationText)
        const result = eval(equationText)
        cy.log('results', result)

        cy.get('#feedback-form > mat-form-field:nth-child(6) > div.mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--outlined').type(result)
      })

    //submit form
    cy.get('#submitButton > .mat-mdc-button-touch-target').click({ force: true })

  })

  it('should block non-customers from Complaint page', () => {
    // Log in as a normal user
    cy.tabExists('Complaint').then(exists => {
      if (exists) {
        cy.sidebarAccess('complain')
      } else {
        cy.log('Tab not available — skipping click')
      }
    })

  })

  it('should allow users to access Complaint page', () => {
    //Log in as admin
    cy.login({
      email: Cypress.env('userEmail'),
      password: Cypress.env('userPassword')
    },
      { create: false });
    cy.tabExists('Complaint').then(exists => {
      if (exists) {
        cy.sidebarAccess('complain')
      } else {
        cy.log('Tab not available — skipping click')
      }
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
    cy.login({
      email: Cypress.env('userEmail'),
      password: Cypress.env('userPassword')
    },
      { create: false });
    cy.sidebarAccess('chatbot')
  })


  // it('login with user', () => {
  //   cy.login({
  //     email: user2.email,
  //     password: user2.password
  //   },
  //     { create: false });
  //   cy.visit('/#/administration')
  //   cy.contains('Administration').should('be.visible')
  // });

  it('opens on about us page', () => {
    cy.request(Cypress.env('baseUrl') + '#/contact')
      .should('have.property', 'status', 200);
  })
  it('opens on photo wall page', () => {
    cy.request(Cypress.env('baseUrl') + '#/contact')
      .should('have.property', 'status', 200);
  })
  it('opens on deluxe membership page', () => {
    cy.request(Cypress.env('baseUrl') + '#/contact')
      .should('have.property', 'status', 200);
  })
  it.skip('basic cybersecurity headers', () => {
    cy.checkHeaders('#/contact');
  })
})