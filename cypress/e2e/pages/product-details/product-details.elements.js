export class ProductDetailsElements {
    static get buttons() {
        return {
            get addCart() {
                return cy.contains('a', 'Add to cart');
    
            }
        }
    }
}