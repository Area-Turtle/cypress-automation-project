describe('smoke tests spec', () => {
  it('opens on landing page', () => {
    cy.request(Cypress.config('baseUrl'))
      .should('have.property', 'status', 200);
  })

  it.skip('basic cybersecurity headers', () => {
    cy.checkHeaders('/#/');

  })

})