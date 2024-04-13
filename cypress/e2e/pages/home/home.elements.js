export class HomeElements{
        static get categoriesMenu(){
            return{
                get phones(){
                    return cy.contains('a', 'Phones')
                },

                get laptot(){
                    return cy.contains('a', 'Laptops')
                },

                get monitors(){
                    return cy.contains('a', 'Monitors')
                }
            };
        };

        static product(productLink){
           return cy.contains("a", productLink)
        }
}