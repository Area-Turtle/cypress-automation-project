// cypress/components/loginForm.component.js
class LoginForm {
  enterEmail(email) {
    cy.get('[name="email"]').should('be.visible').type(email)
  }

  enterPassword(password) {
    cy.get('[name="password"]').should('be.visible').type(password)
  }

  submit() {
    cy.get('#loginButton').should('be.visible').click({ force: true })
  }

  fill(email, password) {
    this.enterEmail(email)
    this.enterPassword(password)
  }
}

export default new LoginForm()
