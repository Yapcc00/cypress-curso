import { HomeElements } from './home.elements'

export class HomeMethods {

    static clickOnPhones() {
        HomeElements.categoriesMenu.phones.click()
    }
    static clickOnLaptop() {
        HomeElements.categoriesMenu.laptot.click()
    }
    static clickOnMonitors() {
        HomeElements.categoriesMenu.monitors.click()
    }

    static clickOnProducts(productLink){
        HomeElements.product(productLink).click();
    }
}
