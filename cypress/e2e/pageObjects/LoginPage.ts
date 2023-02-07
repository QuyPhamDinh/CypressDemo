
export class LoginPage{
    get userName() {
        return cy.get("[data-test='username']")
    }

    get password() {
        return cy.get("[data-test='password']")
    }

    get loginBtn() {
        return cy.get("[data-test='login-button']")
    }

    login(userName:string, password:string){
        this.userName.type(userName)
        this.password.type(password)
        this.loginBtn.click()
    }
}