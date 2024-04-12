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
            get btnClose(){
                return cy.get('div[id="logInModal"] button').eq(1);
            },
            get btnLogin(){
                return cy.contains('button', 'Log in');
            }
        }
    }
}