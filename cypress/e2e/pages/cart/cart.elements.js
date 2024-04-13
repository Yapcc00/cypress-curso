export class CartElelemnts {
    static get buttons() {
        return {
            get placeOrder() {
                return cy.get('a#cartur')
            }
        }
    };


    static get links() {
        return {
            get linkDelete() {
                return cy.contains('a', 'Delete')
            },
            get btnPlaceOrder() {
                return cy.get('button[data-toggle="modal"]')
            }
        }
    }
}