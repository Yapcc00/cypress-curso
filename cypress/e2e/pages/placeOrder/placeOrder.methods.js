import { PlaceOrderElements } from "./placeOrder.elements"

export class PlaceOrderMethods{

    static insertName(Name){
        PlaceOrderElements.Form.name.type(Name)
    }

    static insertCountry(country){
        PlaceOrderElements.Form.country.type(country)
    }

    static insertCity(city){
        PlaceOrderElements.Form.city.type(city)
    }

    static inserCreditCard(creditCard){
        PlaceOrderElements.Form.creditCard.type(creditCard)
    }

    static inserMounth(mounth){
        PlaceOrderElements.Form.mounth.type(mounth)
    }

    static insertYear(year){
        PlaceOrderElements.Form.year.type(year)
    }

    static clickOnPurchased(){
        PlaceOrderElements.FormBtn.btnPurchase.click()
    }
    static clickOnOk(){
        PlaceOrderElements.FormBtn.btnOk.dblclick()

    }

    static completeOrder(name,country,city,creditCard,mounth,year){
        this.insertName(name)
        this.insertCountry(country)
        this.insertCity(city)
        this.inserCreditCard(creditCard)
        this.inserMounth(mounth)
        this.insertYear(year)
        this.clickOnPurchased()
        this.clickOnOk()
    }
}
