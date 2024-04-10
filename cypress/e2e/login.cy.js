const allureWriter = require('@shelex/cypress-allure-plugin/writer');

//describe es el suite  of pruebas, conjunto de prueba
describe("Login", () => {
    //el IT es donde se escribe los  caso de prueba 
    it('Login con credenciales de standart user', () => {
        //para visitar un paginase utiliza VISIT
        cy.visit('https://www.saucedemo.com/')
    })
})