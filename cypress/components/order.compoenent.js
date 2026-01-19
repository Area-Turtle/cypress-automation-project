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
    selectAddresses() {
        this.selectOrderPage()
        cy.get('[routerlink="/address/saved"]').click({ force: true })
    }
    selectPayment() {
        this.selectOrderPage()
        cy.get('[routerlink="/saved-payment-methods"]').click({ force: true })
    }
    selectDigital() {
        this.selectOrderPage()
        cy.get('[routerlink="/wallet"]').click({ force: true })
    }

}
export default new Order()