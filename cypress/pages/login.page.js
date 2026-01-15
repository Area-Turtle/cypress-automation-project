// cypress/support/commands.js
import LoginForm from '../components/login.component.js'
import RegisterForm from '../components/registration.component.js'

class LoginPage {
  visit() {
    cy.visit(Cypress.env('baseUrl') + '#/login')
  }

  login(user, { create = false } = {}) {
    this.visit()

    if (create) {
      cy.visit('/undefined#/register')
      RegisterForm.register(user)
    } else {
      LoginForm.fill(user.email, user.password)
      LoginForm.submit()
    }

    this.validateLogin()
  }

  validateLogin() {
    cy.request('/rest/user/whoami')
      .its('status')
      .should('eq', 200)
  }
}

export default LoginPage