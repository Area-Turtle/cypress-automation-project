import Card from '../components/addCard.component.js'

class Deluxe {
    visit() {
        cy.request(Cypress.env('baseUrl') + '#/deluxe-membership')
            .should('have.property', 'status', 200);

    }
    checkTitle() {
        cy.get('.deluxe-membership > .card-text > .item-name').should('be.visible')

    }
    checkSubheading1() {
        cy.get('.feature-cards-container > :nth-child(1) > .card-text > .item-name').should('be.visible')

    }
    checkSubheading2() {
        cy.get(':nth-child(2) > .card-text > .item-name').should('be.visible')
    }

    checkSubheading3() {
        cy.get(':nth-child(3) > .card-text > .item-name').should('be.visible')

    }
    becomeMember() {
        cy.get('.card-text > .mdc-button > .mat-mdc-button-touch-target').click({force:true})
    }
    addCard(){
        cy.get('#mat-expansion-panel-header-0 > .mat-content > .mat-expansion-panel-header-description').click({force:true})
    }
    verifyDeluxe() {
        this.visit()
        this.checkTitle()
        this.checkSubheading1()
        this.checkSubheading2()
        this.checkSubheading3()
    }
}
export default new Deluxe()