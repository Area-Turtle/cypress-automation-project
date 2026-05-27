import LoginPage from '../pages/login.page.js'
import SideBarPage from '../pages/sidebar.page.js'
import HeaderPage from '../pages/header.page.js'


const loginPage = new LoginPage()
const sideBarPage = new SideBarPage()
const headerPage = new HeaderPage()
function cardSelect(item) {
    cy.get('body > app-root > mat-sidenav-container > mat-sidenav-content > app-search-result > div > div > mat-paginator > div > div > div.mat-mdc-paginator-page-size.ng-star-inserted > mat-form-field > div.mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--outlined.mdc-text-field--no-label > div > div.mat-mdc-form-field-infix > div')
        .click({ force: true })
    cy.get('#mat-option-2').click({ force: true })
    cy.get('body > app-root > mat-sidenav-container > mat-sidenav-content > app-search-result > div > div > mat-paginator > div > div > div.mat-mdc-paginator-range-actions > div')
        .contains('1 – 36 of 36')
    cy.get('body > app-root > mat-sidenav-container > mat-sidenav-content > app-search-result > div > div > div.ng-star-inserted > mat-grid-list > div > mat-grid-tile:nth-child(' + item + ') > div > mat-card > div > div.mat-mdc-tooltip-trigger.product > div > div.item-name')
        // cy.get('.item-name')
        .first()
        .invoke('text')
        .as('cardListName')
    cy.get('body > app-root > mat-sidenav-container > mat-sidenav-content > app-search-result > div > div > div.ng-star-inserted > mat-grid-list > div > mat-grid-tile:nth-child(' + item + ') > div > mat-card > div > div.mat-mdc-tooltip-trigger.product > div > div.item-price > span')
        .first()
        .invoke('text')
        .as('cardListPrice')

    // click on tile
    cy.get('body > app-root > mat-sidenav-container > mat-sidenav-content > app-search-result > div > div > div.ng-star-inserted > mat-grid-list > div > mat-grid-tile:nth-child(' + item + ') > div > mat-card > div')
        .click()
    cy.get('@cardListName').then((name) => {
        cy.get('h1')
            .first()
            .should('have.text', name)
    })
    cy.get('@cardListPrice').then((price) => {
        cy.get('p')
            .first()
            .should('have.text', price)
    })
    cy.get('.mat-mdc-dialog-actions')
        .within(() => {
            cy.contains('button', 'Close').click({ force: true })
        })
}
describe('tile page test spec', () => {
    // checks if all tiles are valid
    for (let a = 1; a < 36; a++) {
    it('select card '+ a, () => {
        cy.request(Cypress.config('baseUrl'))
            .should('have.property', 'status', 200);
            cardSelect(a)
        
    })
    }

})