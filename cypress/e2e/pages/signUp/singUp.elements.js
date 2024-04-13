export class signUpElements {
    static get inputText() {
        return {
            get username() {
                return cy.get('input#sign-username');
            },

            get password() {
                return cy.get('input#sign-password');
            }
        };
    };

    static get buttons(){
        return {
            get btnSignUp() {
                return cy.contains('button', 'Sign up');
            },
        };
    };
    
}