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
    navigateToSavedAddressess(text1,text2,text3,text4,text5,text6,number) {
        this.login()
        order.selectAddresses(text1,text2,text3,text4,text5,text6,number)
    }
    navigateToPaymentOptions(text, card, month, year, number) {
        this.login()
        order.selectPayment(text, card, month, year, number)
    }
    navigateToDigitalWallet(text) {
        this.login()
        order.selectDigital(text)
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
