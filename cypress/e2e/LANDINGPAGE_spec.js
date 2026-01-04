describe('landing page spec', () => {
  it('opens on landing page', () => {
    cy.request(Cypress.config('baseUrl'))
      .should('have.property', 'status', 200);
  })

    it('opens on landing page', () => {
   
    // Injecting a simple XSS payload
    cy.get('textarea[name="comment"]').type('<script>alert("XSS Attack!");</script>');
    cy.get('button[type="submit"]').click();
    
    // Assert that the page does not show the script as a result
    cy.get('body').should('not.contain', 'XSS Attack!');

  })


})