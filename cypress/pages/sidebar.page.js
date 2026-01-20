import Sidebar from '../components/sidebar.component.js'

class SideBarPage {
  visit() {
    cy.visit(Cypress.env('baseUrl')+'#/')
  }
  navigateToSideBar(){
    Sidebar.verifyOpen()
  }
  navigateToFeedBack(text) {
    this.visit()
    Sidebar.goToFeedBack(text)
  }
  navigateToComplaints(email,message) {
    this.visit()
    Sidebar.goToComplaints(email,message)
  }
  navigateToSupportChat(text) {
    this.visit()
    Sidebar.goToSupportChat(text)
  }
  navigateToAboutUs() {
    this.visit()
    Sidebar.goToAboutUs()
  }
  navigateToPhotoWall() {
    this.visit()
    Sidebar.goToPhotoWall()
  }
  navigateToDeluxe(text, card, month, year, number){
    this.visit()
    Sidebar.goToDeluxe(text, card, month, year, number)
  }
}

export default SideBarPage