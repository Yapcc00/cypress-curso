const { HomeMethods } = require("./pages/home/home.mehods");
const { LoginMethods } = require("./pages/login/login.methods");
const { signUpMethods } = require("./pages/signUp/signUp.methods");


describe('', () => {
    it('', () => {
        cy.visit('https://www.demoblaze.com/');
        HomeMethods.clickOnProducts("Iphone 6 32gb")
        cy.wait(10000)
       
    })
})