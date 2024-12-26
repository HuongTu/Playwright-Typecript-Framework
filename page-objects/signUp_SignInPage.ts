import { Page, Locator, expect } from "playwright/test";
const dataset = require("../testdata/authenInfo")

export class SignInUpPage{

    readonly page : Page
    readonly userNameSignUp : Locator
    readonly passwordSignUP: Locator
    readonly emailSignUp: Locator
    readonly registerBtn: Locator
    readonly usernameLogin: Locator
    readonly pwLogin: Locator
    readonly loginBtn: Locator

    username = "autotest4"

    constructor(page : Page){
        this.page = page
        this.userNameSignUp = page.locator("form.register input[name = 'username']")
        this.passwordSignUP = page.locator("form.register input[name = 'password']")
        this.emailSignUp = page.locator("form.register input[name = 'email']")
        this.registerBtn = page.locator("button[name = 'register']")
        this.usernameLogin = page.locator("input#username")
        this.pwLogin = page.locator("input#password")
        this.loginBtn = page.locator("button[name = 'login']")
    
    }

    async naviggateToWebSite(){
        await this.page.goto("https://practice.sdetunicorns.com/", { waitUntil: 'networkidle' })

    }

    async fillUpRegisterForm(){
        await this.page.getByText("My Account").first().click()
        await this.userNameSignUp.fill(this.username)
        await this.emailSignUp.fill("autotest4@fsqa.com")
        await this.passwordSignUP.fill(dataset.email)
        await this.page.waitForTimeout(3000);
    }

    async clickOnRegisterBtn(){
        await this.registerBtn.click()
        await this.page.waitForTimeout(3000);
    }

    async verifyCreateAccountSuccessfully(){
        await expect(this.page.locator("//div[@class = 'woocommerce-notices-wrapper']/following-sibling::p/strong").first()).toHaveText(this.username)
    }

    async fillUpLoginForm(){
        await this.page.getByText("My Account").first().click()
        await this.usernameLogin.fill(dataset.username)
        await this.pwLogin.fill(dataset.password)
    }
    
    async clickOnLoginBtn(){
        await this.loginBtn.click()
    }
}
module.exports = {SignInUpPage}