import feedback from '../components/feedback.component.js'
import complaint from '../components/complaint.component.js'
import supportchat from '../components/supportchat.component.js'
import deluxe from '../components/deluxe.component.js'
import aboutus from '../components/aboutus.component.js'
import photowall from '../components/photowall.component.js'



class Sidebar {
  // Open sidebar if it’s collapsible
  open() {
    cy.get('.mdc-icon-button > .mat-icon').click({ force: true })
  }

  // Select a menu item by name, only if visible
  selectMenuItem(name) {
    //this.open() // ensure sidebar is visible
    const tempName = name === 'contact' ? 'Customer Feedback' : name;
     cy.get(`[routerlink="/${name}"]`)
     .contains('.mdc-list-item__content', tempName)
     .should('be.visible') // ensures role-based visibility
     .click({force:true})

  }
  //cy.get('[routerlink="/contact"]')
  //a:nth-child(6)
  // Check if a tab is visible (useful for role-based testing)
  isTabVisible(name) {
    this.open()
    const tempName = name === 'contact' ? 'Customer Feedback' : name;
    return cy.get(`[routerlink="/${name}"]`)
      .contains('.mdc-list-item__content', tempName)
      .then($el => $el.length > 0 && $el.is(':visible'))
  }

  // Shortcut for different tabs
  goToComplaints() {
    this.isTabVisible('complaint').then(isVisible => {
      if (isVisible) {
        cy.log('complaint tab is visible')
        this.selectMenuItem('complaint')
        //feedback
        // continue actions here
      } else {
        throw new Error('complaint tab is not visible')
      }
    })

  }
  goToFeedBack() {
    // this.selectMenuItem('contact')
    this.isTabVisible('contact').then(isVisible => {
      if (isVisible) {
        cy.log('contact tab is visible')
        this.selectMenuItem('contact')
        //feedback.feedback()
      } else {
        throw new Error('contact tab is not visible')
      }
    })
  }
  goToSupportChat() {
    this.selectMenuItem('chat-bot')
    this.isTabVisible('chat-bot').then(isVisible => {
      if (isVisible) {
        cy.log('chat-bot tab is visible')
        // continue actions here
      } else {
        throw new Error('chat-bot tab is not visible')
      }
    })
  }
  goToAboutUs() {
    this.selectMenuItem('about')
    this.isTabVisible('about').then(isVisible => {
      if (isVisible) {
        cy.log('about tab is visible')
        // continue actions here
      } else {
        throw new Error('about tab is not visible')
      }
    })
  }
  goToPhotoWall() {
    this.selectMenuItem('photo-wall')
    this.isTabVisible('photo-wall').then(isVisible => {
      if (isVisible) {
        cy.log('Complaint tab is visible')
        // continue actions here
      } else {
        throw new Error('Complaint tab is not visible')
      }
    })
  }
  goToDeluxe() {
    this.selectMenuItem('deluxe-membership')
    this.isTabVisible('deluxe-membership').then(isVisible => {
      if (isVisible) {
        cy.log('deluxe-membership tab is visible')
        // continue actions here
      } else {
        throw new Error('deluxe-membership tab is not visible')
      }
    })
  }
}

export default new Sidebar()