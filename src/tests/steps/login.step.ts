import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../hooks/world';


Given('I navigate to the login page', async function (this: CustomWorld) {
    await this.loginPage.navigateToUrl('https://conduit.bondaracademy.com/login');
  });

When('I enter a valid username and password', async function(this : CustomWorld) {
    await this.loginPage.enterUsernameAndPassWord('huongptt.hanu@gmail.com', 'password');
});

When('I click on the login button', async function (this :CustomWorld) {
    await this.loginPage.clickLogin();
    await this.page.waitForLoadState('networkidle');
    await  this.page.waitForTimeout(3000)
});

Then('I should be redirected to the homepage', async function (this : CustomWorld) {
    await this.loginPage.isLoggedIn();
});