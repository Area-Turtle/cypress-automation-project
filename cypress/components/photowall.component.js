class PhotoWall {
    visit() {
        cy.request(Cypress.env('baseUrl') + '#/photo-wall')
            .should('have.property', 'status', 200);
    }
    checkTitle(){
        cy.get('h1').should('be.visible')
    }

    verifyPhoto(){
        this.visit()
        this.checkTitle()
    }
}
export default new PhotoWall()