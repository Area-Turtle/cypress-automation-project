describe('customer feedback spec', () => {
  it('opens on customer feedback page', () => {
    cy.request('http://localhost:3000')
      .should('have.property', 'status', 200);
  })
})