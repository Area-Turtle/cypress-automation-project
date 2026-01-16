class feedback {
    // cy.visit(Cypress.env('baseUrl') + '#/contact')
    enterComment(text) {
        cy.get('#comment').should('be.visible').clear().type(text)
    }
    selectSlider() {
        cy.get('.mdc-slider__input').click()
    }
    solveCaptcha() {
        cy.get('#captcha').should('be.visible')
            .then(($el) => {
                const equationText = $el.text().trim()
                const result = eval(equationText)
                cy.log('results', result)

                cy.get('#feedback-form > mat-form-field:nth-child(6) > div.mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--outlined').type(result)
            })
    }
    selectSubmit() {
        cy.get('#submitButton > .mat-mdc-button-touch-target').should('be.enabled').click({ force: true })
    }
    completeFeedback(text){
        this.enterComment(text)
        this.selectSlider()
        this.solveCaptcha()
        this.selectSubmit()
    }
}
export default new feedback()