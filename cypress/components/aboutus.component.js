class AboutUs {
    visit() {
        cy.request(Cypress.env('baseUrl') + '#/about')
            .should('have.property', 'status', 200);
    }

    checkTitle() {
        cy.get('#corporate-history').should('be.visible')
    }
    checkFeedback() {
        cy.get('#customer-feedback').should('be.visible')
    }

    verifyAbout() {
        this.visit()
        this.checkTitle()
        this.checkFeedback()
    }
}
export default new AboutUs()