describe('features test spec', () => {
    it('opens on landing page', () => {
        cy.request(Cypress.config('baseUrl'))
            .should('have.property', 'status', 200);
    })

    it('create item', () => {
        cy.request(Cypress.config('baseUrl'))
            .should('have.property', 'status', 200);
    })

    it('edit item', () => {
        cy.request(Cypress.config('baseUrl'))
            .should('have.property', 'status', 200);
    })
    it('delete item', () => {
        cy.request(Cypress.config('baseUrl'))
            .should('have.property', 'status', 200);
    })
    it('checkout', () => {
        cy.request(Cypress.config('baseUrl'))
            .should('have.property', 'status', 200);
    })

    it.skip('basic cybersecurity headers', () => {
        cy.checkHeaders('/#/');

    })

})