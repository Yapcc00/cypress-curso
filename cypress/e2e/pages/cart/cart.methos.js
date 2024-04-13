import { CartElelemnts } from "./cart.elements";

export class CartMethods {  
    static ClickOnCart(){
        CartElelemnts.buttons.placeOrder.click();
    }

    static clickOnPlaceOrder(){
        CartElelemnts.links.btnPlaceOrder.click();
    }

    static ClickOnLinkDelete(){
        CartElelemnts.links.linkDelete.click();
    }
}   