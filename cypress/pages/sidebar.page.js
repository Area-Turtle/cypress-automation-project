import Sidebar from '../components/sidebar.component.js'

class SideBarPage {
  visit() {
    cy.visit(Cypress.env('baseUrl')+'#/')
  }
  navigateToFeedBack(text) {
    this.visit()
    Sidebar.goToFeedBack(text)
  }
  navigateToComplaints(email,message) {
    this.visit()
    Sidebar.goToComplaints(email,message)
  }
  navigateToSupportChat() {
    this.visit()
    Sidebar.goToSupportChat()
  }
  navigateToAboutUs() {
    this.visit()
    Sidebar.goToAboutUs()
  }
  navigateToPhotoWall() {
    this.visit()
    Sidebar.goToPhotoWall()
  }
  navigateToDeluxe(){
    this.visit()
    Sidebar.goToDeluxe()
  }
}

export default SideBarPage