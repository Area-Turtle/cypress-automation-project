describe('customer feedback spec', () => {
  it('opens on customer feedback page', () => {
    cy.request(Cypress.env('baseUrl')+'#/contact')
      .should('have.property', 'status', 200);
  })

  it('completes customer feedback form',()=> {
    
    cy.visit(Cypress.env('baseUrl')+'#/contact')
    cy.wait(1000)
    //comment text
    cy.typeWithAnimations('#comment','the bad stuff')

    //slider
    cy.get('.mdc-slider__input').click()

    // captcha values
    cy.get('#captcha')
      .then(($el)=>{
        
        const equationText = $el.text().trim()
        cy.log('captcha contents', equationText)
        const result = eval(equationText)
        cy.log('results', result)

        cy.get('#feedback-form > mat-form-field:nth-child(6) > div.mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--outlined').type(result)
    })

    //submit form
    cy.get('#submitButton > .mat-mdc-button-touch-target').click({force:true})

  })

})