import { signUpElements } from "./singUp.elements";

export class signUpMethods{
    
    static insertUsername(username) {
        signUpElements.inputText.username.invoke('val',username);
    }
    static insertPassword(password) {
        signUpElements.inputText.password.invoke('val',password);
    }
    static clickBtnLogin() {
        signUpElements.buttons.btnSignUp.click({ force: true });;
    }

    static Login(username, password) {
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickBtnLogin();
    }
}