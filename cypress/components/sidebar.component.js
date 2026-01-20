import Feedback from '../components/feedback.component.js'
import Complaint from '../components/complaint.component.js'
import SupportChat from '../components/supportchat.component.js'
import Deluxe from '../components/deluxe.component.js'
import AboutUs from '../components/aboutus.component.js'
import PhotoWall from '../components/photowall.component.js'


class Sidebar {

  // Open sidebar if it’s collapsible
  open() {
    cy.get('.mdc-icon-button > .mat-icon').click({ force: true })
  }
  verifyOpen(){
    this.open()
    cy.get('.mat-mdc-nav-list').should('be.visible')
  }

  // Select a menu item by name, only if visible
  selectMenuItem(name) {
    let tempName = " "
    // this.open()
    if (name == 'contact') { tempName = 'Customer Feedback' }
    else if (name == 'complain') { tempName = 'Complaint' }
    else if (name == 'chatbot') { tempName = 'Support Chat' }
    else if (name == 'about') { tempName = 'About Us' }
    else if (name == 'photo-wall') { tempName = 'Photo Wall' }
    else if (name == 'deluxe-membership') { tempName = 'Deluxe Membership' }
    else {
      tempName = name
    }
    //this.open() // ensure sidebar is visible
    //const tempName = name === 'contact' ? 'Customer Feedback' : name;

    cy.get(`[routerlink="/${name}"]`)
      .contains('.mdc-list-item__content', tempName)
      .should('be.visible') // ensures role-based visibility
      .click({ force: true })

  }
  
  // Check if a tab is visible (useful for role-based testing)
  isTabVisible(name) {
    let tempName = " "
    this.open()
    if (name == 'contact') { tempName = 'Customer Feedback' }
    else if (name == 'complain') { tempName = 'Complaint' }
    else if (name == 'chatbot') { tempName = 'Support Chat' }
    else if (name == 'about') { tempName = 'About Us' }
    else if (name == 'photo-wall') { tempName = 'Photo Wall' }
    else if (name == 'deluxe-membership') { tempName = 'Deluxe Membership' }
    else {
      tempName = name
    }

    return cy.get(`[routerlink="/${name}"]`)
      .contains('.mdc-list-item__content', tempName)
      .then($el => $el.length > 0 && $el.is(':visible'))
  }
  // Shortcut for different tabs
  goToFeedBack(text) {
    // this.selectMenuItem('contact')
    this.isTabVisible('contact').then(isVisible => {
      if (isVisible) {
        cy.log('contact tab is visible')
        this.selectMenuItem('contact')
        Feedback.completeFeedback(text)
      } else {
        throw new Error('contact tab is not visible')
      }
    })
  }
  goToComplaints(email, message) {
    this.isTabVisible('complain').then(isVisible => {
      if (isVisible) {
        cy.log('complaint tab is visible')
        this.selectMenuItem('complain')
        Complaint.fillComplaint(email, message)
        // continue actions here
      } else {
        throw new Error('complaint tab is not visible')
      }
    })

  }
  goToSupportChat(text) {
    this.isTabVisible('chatbot').then(isVisible => {
      if (isVisible) {
        cy.log('chat-bot tab is visible')
        this.selectMenuItem('chatbot')
        // continue actions here
        SupportChat.verifyPage()
      } else {
        throw new Error('chat-bot tab is not visible')
      }
    })
  }
  goToAboutUs() {
    this.isTabVisible('about').then(isVisible => {
      if (isVisible) {
        cy.log('about tab is visible')
        this.selectMenuItem('about')
        AboutUs.verifyAbout()
      } else {
        throw new Error('about tab is not visible')
      }
    })
  }
  goToPhotoWall() {
    this.isTabVisible('photo-wall').then(isVisible => {
      if (isVisible) {
        cy.log('Complaint tab is visible')
        this.selectMenuItem('photo-wall')
        // continue actions here
        PhotoWall.verifyPhoto()
      } else {
        throw new Error('Complaint tab is not visible')
      }
    })
  }
  goToDeluxe() {
    this.isTabVisible('deluxe-membership').then(isVisible => {
      if (isVisible) {
        cy.log('deluxe-membership tab is visible')
        this.selectMenuItem('deluxe-membership')
        // continue actions here
        Deluxe.verifyDeluxe()
      } else {
        throw new Error('deluxe-membership tab is not visible')
      }
    })
  }
}

export default new Sidebar()