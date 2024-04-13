export class PlaceOrderElements{
    static get Form(){
        return {
            get name(){
                return cy.get('input#name')
            },
            get country(){
                return cy.get('input#country')
            },
            get city(){
                return cy.get('input#city') 
            },
            get creditCard(){
                return cy.get('input#card')
            },
            get mounth(){
                return cy.get('input#month')
            },
            get year(){
                return cy.get('input#year')
            },    
        };
    };

    static get FormBtn(){
        return {
            get btnPurchase(){
                return cy.contains('button', 'Purchase')
            },
            get btnOk(){
                return cy.contains('button', 'OK')
            },
        };
    }



}