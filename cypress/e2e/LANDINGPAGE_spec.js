import 'cypress-automation-project\cypress\support\commands.js'
import 'cypress-automation-project\cypress\support\e2e.js'

describe('landing page spec', () => {
  it('opens on landing page', () => {
    cy.request('http://localhost:3000')
      .should('have.property', 'status', 200);
  })

})