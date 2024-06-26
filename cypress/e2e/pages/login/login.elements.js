export class LoginElements {
    static get textBox() {
        return {
            get username() {
                return cy.get('input#loginusername');
            },
            get password(){
                return cy.get('input#loginpassword');
            }
        }
    }

    static get Buttons(){
        return{
            get btnLogin(){
                return cy.contains('button', 'Log in');
            }
        }
    }
}