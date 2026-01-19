class SupportChat {
    visit() {
        cy.request(Cypress.env('baseUrl') + '#/chatbot')
            .should('have.property', 'status', 200);
    }
    checkTitle(){
        cy.get('h1').should('be.visible')
    }
    enterMessage(text){
        cy.get('[name="message"]').type(text+'{enter}')
    }

    verifyPage(text){
        this.visit()
        this.checkTitle()
        this.enterMessage(text)
    }

}
export default new SupportChat()