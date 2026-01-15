// cypress/components/registerForm.component.js
class RegisterForm {
  enterEmail(email) {
    cy.get('#emailControl').should('be.visible').type(email)
  }

  enterPassword(password) {
    cy.get('#passwordControl').should('be.visible').type(password)
    cy.get('#repeatPasswordControl').should('be.visible').type(password)
  }

  selectSecurityQuestion() {
    cy.get('.mat-mdc-select-placeholder').should('be.visible').click({ force: true })
    cy.get('#mat-option-0').should('be.visible').click({ force: true })
  }

  answerSecurityQuestion(answer = 'abc') {
    cy.get('#securityAnswerControl').should('be.visible').type(answer)
  }

  submit() {
    cy.get('#registerButton').should('be.visible').click({ force: true })
  }

  register(user) {
    this.enterEmail(user.email)
    this.enterPassword(user.password)
    this.selectSecurityQuestion()
    this.answerSecurityQuestion()
    this.submit()
  }
}

export default new RegisterForm()