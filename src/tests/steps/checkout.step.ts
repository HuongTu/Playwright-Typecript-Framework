import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../hooks/world';

Given('I navigate to the product page',{ timeout: 20000 }, async function (this: CustomWorld) {
    await this.homePage.navigateToUrl('https://automationteststore.com/');
});

When('I add an item to the cart', async function (this: CustomWorld){
    await this.homePage.selectProduct('Benefit Bella Bamba');
});

Then('the item should be added to the cart', async function (this: CustomWorld) {
    await this.homePage.isProductAddedToCart('Benefit Bella Bamba');

});

When('I proceed to checkout', async function (this: CustomWorld) {
    await this.homePage.clickOnCheckOutButton();
    await this.homePage.selectGuessCheckoutOption();
    
});

When('I fill in the guest checkout form with valid details', async function (this: CustomWorld) {
    // Assuming fillInBillingDetails is implemented to fill in the necessary details
    await this.homePage.fillInBillingDetails();
    await this.homePage.clickOnContinueButton();
});