import { LoginElements } from "./login.elements";



export class LoginMethods {

    static insertUsername(username) {
        LoginElements.textBox.username.type(username);
    }
    static insertPassword(password) {
        LoginElements.textBox.password.type(password);
    }
    static clickBtnLogin(username) {
        LoginElements.Buttons.btnLogin.click();
    }

    static Login(username, password) {
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickBtnLogin();

    }
}