import order from '../components/order.compoenent.js'
import privacy from '../components/privacy.compoenent.js'

class header {
    login(){
        cy.login()
    }
    navigateToOrderHistory() {
        this.login()
        order.selectHistory()
    }
    navigateToRecycle(){
        cy.login()
        order.selectRecycle()
    }
    navigateToSavedAddressess() {
        cy.login()
        order.selectAddresses()
    }
    navigateToPaymentOptions() {
        cy.login()
        order.selectPayment()
    }
    navigateToDigitalWallet() {
        cy.login()
        order.selectDigital()
    }
}
export default header
