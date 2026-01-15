import Sidebar from '../components/sidebar.component.js'

class SideBarPage {
  visit() {
    cy.visit(Cypress.env('baseUrl')+'#/')
  }
  navigateToFeedBack() {
    this.visit()
    Sidebar.goToFeedBack()
  }
  navigateToComplaints() {
    this.visit()
    Sidebar.goToComplaints()
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
}

export default SideBarPage