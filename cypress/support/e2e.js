// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// cypress/support/e2e.js
Cypress.on('uncaught:exception', (err, runnable) => {
  // This will prevent Cypress from failing the test on uncaught exceptions
  return false;
});



beforeEach(() => {
  // This code runs before each test
    // Clear cookies, localStorage, and sessionStorage after the test
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.request(Cypress.config('baseUrl'))
        .should('have.property', 'status', 200);
    cy.visit(Cypress.config('baseUrl'))
    cy.get('.cc-btn').click()
    cy.get('.close-dialog > .mat-mdc-button-touch-target').click({force:true})
});


