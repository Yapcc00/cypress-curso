const { LoginMethods } = require("./pages/login/login.methods");

describe('', () => {
    it('', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.get('a[data-target="#logInModal"]').click();
        LoginMethods.Login('parco','qa');
        cy.wait(1000);
       
    })
})