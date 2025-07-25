import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToUrl(url: string) {   
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle');
      }
    
      async enterUsernameAndPassWord(username: string, password: string) {
        await this.page.click("a[href= '/login']")
        await this.page.fill("input[formcontrolname = 'email']", username);
        await this.page.fill("input[formcontrolname = 'password']", password);
      }
    
      async clickLogin() {
        await this.page.waitForSelector("button[type='submit']");
        await this.page.click("button[type='submit']");
      }
    
      async isLoggedIn() {
        await this.page.locator("a[class = 'nav-link']").filter({ hasText: ' test.acount1 '}).isVisible;
      }

      //draft
      async isLoginErrorMessageDisplayed() {
        return await this.page.isVisible("div[class='alert alert-danger']");
      }
    
}