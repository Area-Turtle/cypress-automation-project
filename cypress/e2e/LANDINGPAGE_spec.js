describe('landing page spec', () => {
  it('opens on landing page', () => {
    cy.request('http://localhost:3000')
      .should('have.property', 'status', 200);
  })

})