import Money from './addMoney.component.js'

class Order {
    selectNavBar() {
        cy.get('#navbarAccount > .mat-mdc-button-touch-target').click({ force: true })
    }
    selectOrder() {
        cy.get('.mat-mdc-menu-content > [aria-label="Show Orders and Payment Menu"]').click({ force: true })
    }
    selectOrderPage() {
        this.selectNavBar()
        this.selectOrder()
    }
    selectHistory() {
        this.selectOrderPage()
        cy.get('[routerlink="/order-history"]').click({ force: true })
    }
    selectRecycle() {
        this.selectOrderPage()
        cy.get('[routerlink="/recycle"]').click({ force: true })
    }
    selectAddresses(text1,text2,text3,text4,text5,text6,number) {
        this.selectOrderPage()
        cy.get('[routerlink="/address/saved"]').click({ force: true })
        Money.createAddress(text1,text2,text3,text4,text5,text6,number)
    }
    selectPayment(text, card, month, year, number) {
        this.selectOrderPage()
        cy.get('[routerlink="/saved-payment-methods"]').click({ force: true })
        Money.createCard(text, card, month, year, number)
    }
    selectDigital(text) {
        this.selectOrderPage()
        cy.get('[routerlink="/wallet"]').click({ force: true })
        Money.newDeposit(text)

    }

}
export default new Order()