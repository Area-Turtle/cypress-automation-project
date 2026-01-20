let tempMoney1 = 0
let tempMoney2 = 0
class Money {
    visit() {
        cy.request(Cypress.env('baseUrl') + '#/saved-payment-methods')
            .should('have.property', 'status', 200);
    }
    verifyHeader() {
        cy.get('h1').should('be.visible').contains('My Payment Options')
    }
    selectCard() {
        cy.get('#mat-expansion-panel-header-0 > .mat-content > .mat-expansion-panel-header-description').click({ force: true })
    }
    selectName(text, number) {
        cy.log(text)
        cy.log(number)
        cy.get(`#mat-input-${number}`).type(text)
    }
    selectCardNumber(card, number) {
        cy.log(card)
        cy.log(number)
        cy.get(`#mat-input-${number + 1}`).type(card)
    }
    selectExpMonth(month, number) {
        cy.log(month)
        cy.log(number)
        //cy.get(`#mat-input-${number+2}`).type(month+'{enter}')
        cy.get(`#mat-input-${number + 2}`).select(0)
    }
    selectExpYear(year, number) {
        cy.log(year)
        cy.log(number)
        //cy.get(`#mat-input-${number+3}`).type(year+'{enter}')
        cy.get(`#mat-input-${number + 3}`).select(0)
    }
    selectSubmit() {
        cy.get('#submitButton > .mat-mdc-button-touch-target').click({ force: true })
    }
    createCard(text, card, month, year, number) {
        this.selectCard()
        this.selectName(text, number)
        this.selectCardNumber(card, number)
        cy.wait(500)
        this.selectExpMonth(month, number)
        cy.wait(500)
        this.selectExpYear(year, number)
        cy.wait(500)
        this.selectSubmit()
    }
    newAddress() {
        cy.get('.add-new-address > .mdc-button > .mat-mdc-button-touch-target').click({ force: true })
    }
    addCountry(text, number) {
        cy.get(`#mat-input-${number}`).type(text)
    }
    addName(text, number) {
        cy.get(`#mat-input-${number + 1}`).type(text)
    }
    addMobile(text, number) {
        cy.get(`#mat-input-${number + 2}`).type(text)
    }
    addZip(text, number) {
        cy.get(`#mat-input-${number + 3}`).type(text)
    }
    addAddress(text) {
        cy.get('#address').type(text)
    }
    addCity(text, number) {
        cy.get(`#mat-input-${number + 5}`).type(text)
    }
    createAddress(text1, text2, text3, text4, text5, text6, number) {
        this.newAddress()
        this.addCountry(text1, number)
        this.addName(text2, number)
        this.addMobile(text3, number)
        this.addZip(text4, number)
        this.addAddress(text5, number)
        this.addCity(text6, number)
        this.selectSubmit()
    }

    depositDigital(text) {
        cy.get('#mat-input-4').type(text)
    }
    confirmCard() {
        cy.get('#mat-radio-41-input').click({ force: true })
    }
    nextButton() {
        cy.get('.nextButton > .mat-mdc-button-touch-target').click({ force: true })
    }
    newDeposit(text) {
        this.depositDigital(text)
        this.selectSubmit()
        this.confirmCard()
        this.nextButton()
    }
}
export default new Money()