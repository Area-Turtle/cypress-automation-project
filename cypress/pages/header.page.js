import order from '../components/order.compoenent.js'
import privacy from '../components/privacy.compoenent.js'

class HeaderPage {
    login() {
        cy.login()
    }
    //navagation header order
    navigateToOrderHistory() {
        this.login()
        order.selectHistory()
    }
    navigateToRecycle() {
        this.login()
        order.selectRecycle()
    }
    navigateToSavedAddressess() {
        this.login()
        order.selectAddresses()
    }
    navigateToPaymentOptions() {
        this.login()
        order.selectPayment()
    }
    navigateToDigitalWallet() {
        this.login()
        order.selectDigital()
    }
    //navagation header privacy
    navigateToPrivacyPolicy() {
        this.login()
        privacy.selectPage()
    }
    navigateToDataExport() {
        this.login()
        privacy.selectExport()
    }
    navigateToDataErasure() {
        this.login()
        privacy.selectErasure()
    }
    navigateToChangePassword() {
        this.login()
        privacy.selectPassword()
    }
    navigateTo2faConfiguration() {
        this.login()
        privacy.selectConfiguration()
    }
    navigateToLoginIp() {
        this.login()
        privacy.selectIp()
    }
}
export default HeaderPage
