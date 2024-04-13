import { LoginElements } from "./login.elements";

export class LoginMethods {

    static insertUsername(username) {
        LoginElements.textBox.username.invoke('val',username);
    }
    static insertPassword(password) {
        LoginElements.textBox.password.invoke('val',password);
    }
    static clickBtnLogin() {
        LoginElements.Buttons.btnLogin.click({ force: true });
    }

    static Login(username, password) {
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickBtnLogin();


    }
}