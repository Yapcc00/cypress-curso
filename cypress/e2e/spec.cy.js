const { CartMethods } = require("./pages/cart/cart.methos");
const { HomeMethods } = require("./pages/home/home.mehods");
const { LoginMethods } = require("./pages/login/login.methods");
const { PlaceOrderMethods } = require("./pages/placeOrder/placeOrder.methods");
const { ProductDetailsMethods } = require("./pages/product-details/product-details-methods");
const { signUpMethods } = require("./pages/signUp/signUp.methods");


describe('', () => {
    it('', () => {
        cy.visit('https://www.demoblaze.com/');
        HomeMethods.clickOnProducts("Iphone 6 32gb")
        ProductDetailsMethods.clickOnAddProduct();
        cy.wait(5000)
        CartMethods.ClickOnCart();
        CartMethods.clickOnPlaceOrder();    
        PlaceOrderMethods.completeOrder('Yeison', 'Colombia', 'Medellin', '3000000254', '12', '1965');
        cy.wait(5000)



    })
})