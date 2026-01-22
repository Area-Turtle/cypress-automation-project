import Money from './addMoney.component.js'

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
        cy.get('.card-text > .mdc-button > .mat-mdc-button-touch-target').click({ force: true })
    }
    enterCard(text, card, month, year, number) {
        Money.createCard(text, card, month, year, number)
    }
    confirmDeluxe(){
        cy.get('.error').should('be.visible').contains('You are already a deluxe member!')
    }
    createNewCreditCard(text, card, month, year, number) {
        cy.get('body').then(($body) => {
            if ($body.find('.heading').length > 0) {
                // .heading exists
                this.confirmDeluxe()
            } else {
                this.becomeMember()
                // this.selectCard()
                // this.selectAddCard()
                cy.wait(1000)
                this.enterCard(text, card, month, year, number)
                Money.confirmPayment()
            }
        })
    }

    verifyDeluxe(text, card, month, year, number) {
        this.visit()
        this.checkTitle()
        this.checkSubheading1()
        this.checkSubheading2()
        this.checkSubheading3()
        this.createNewCreditCard(text, card, month, year, number)
        this.confirmDeluxe()

    }
}
export default new Deluxe()