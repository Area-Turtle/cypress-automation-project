import Card from './addMoney.component.js'

class Privacy {
    selectNavBar() {
        cy.get('#navbarAccount > .mat-mdc-button-touch-target').click({ force: true })
    }
    selectPrivacy() {
        cy.get('.mat-mdc-menu-content > [aria-label="Show Privacy and Security Menu"]').click({ force: true })
    }
    selectH1() {
        cy.get('h1').should('be.visible')
    }
    selectH4() {
        cy.get('h4').should('be.visible')
    }
    selectPrivacyPage() {
        this.selectNavBar()
        this.selectPrivacy()
    }
    selectPage() {
        this.selectPrivacyPage() 
        cy.get('[aria-label="Go to privacy policy page"]').click({ force: true })
        this.selectH1()
    }
    selectExport() {
        this.selectPrivacyPage() 
        cy.get('[aria-label="Go to data export page"]').click({ force: true })
        this.selectH1()
    }
    selectErasure() {
        this.selectPrivacyPage() 
        cy.get('[aria-label="Go to data subject page"]').click({ force: true })
        this.selectH4()
    }
    selectPassword() {
        this.selectPrivacyPage() 
        cy.get('[aria-label="Go to change password page"]').click({ force: true })
        this.selectH1()
    }
    selectConfiguration() {
        this.selectPrivacyPage() 
        cy.get('[aria-label="Go to data export page"]').click({ force: true })
        this.selectH1()
    }
    selectIp() {
        this.selectPrivacyPage() 
        cy.get('[aria-label="Go to last login ip page"]').click({ force: true })
        this.selectH1()
    }
}
export default new Privacy()