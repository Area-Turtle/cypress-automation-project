class Complaint {
  verifyEmail(email){
    cy.get('#mat-input-4')
    .should('be.disabled').and('have.value', email)
  }
  selectComment(message){
  cy.get('#complaintMessage').type(message)
  }
  fillComplaint(email,message){
    this.verifyEmail(email)
    this.selectComment(message)
  }
}
export default new Complaint()