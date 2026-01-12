// cypress/support/commands.js
import LoginForm from '../components/loginForm.component'
import RegisterForm from '../components/registerForm.component'

Cypress.Commands.add('loginPOM', (user, { create = false } = {}) => {
  cy.visit(Cypress.env('baseUrl') + '#/login')

  if (create) {
    cy.visit('/undefined#/register')
    RegisterForm.register(user)
  } else {
    LoginForm.fill(user.email, user.password)
    LoginForm.submit()
  }

}, {
  validate() {
    cy.request('/rest/user/whoami').its('status').should('eq', 200)
  }
})