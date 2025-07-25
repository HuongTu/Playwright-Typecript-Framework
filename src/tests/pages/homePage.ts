import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  private page: Page;
  private featuredBlock: Locator;
  private mainMenuTop: Locator;

  constructor(page: Page) {
    this.page = page;
    this.featuredBlock = this.page.locator("#block_frame_featured_1769");
    this.mainMenuTop = this.page.locator("#main_menu_top");
  }

  async navigateToUrl(url: string) {
    await this.page.goto(url);
    await this.page
      .locator('img[alt="Automation Test Store"]')
      .waitFor({ state: "visible" });
    await this.page.waitForLoadState("networkidle");
  }

  async selectProduct(productName: string) {
    const productCard = this.featuredBlock.locator(".col-xs-12").filter({
      has: this.page.locator("a.prdocutname", {
        hasText: productName,
      }),
    });
    await productCard.scrollIntoViewIfNeeded();
    await productCard.locator(".pricetag").locator("a.productcart").click();
  }

  async isProductAddedToCart(productName: string) {
    await this.page.waitForTimeout(1000); // Wait for the cart to update
    await this.mainMenuTop.getByText('Cart').scrollIntoViewIfNeeded();
    await this.mainMenuTop.getByText('Cart').click();
    await this.page.waitForLoadState("networkidle");
    //const cartItem = this.page.;
    await this.page.locator('#cart').getByText(productName).isVisible();
    await expect(this.page.locator('#cart').getByText(productName)).toBeVisible();
}

    async clickOnCheckOutButton(){
        await this.page.locator('#cart_checkout1').isVisible();
        await this.page.locator('#cart_checkout1').click();

    }

    async selectGuessCheckoutOption(){
        await this.page.locator('#accountFrm_accountguest').isVisible();
        await this.page.locator('#accountFrm_accountguest').click();
        await this.page.locator('button[title = "Continue"]').click();

    }

    async fillInBillingDetails(){
        await this.page.locator('#guestFrm_firstname').fill('John');
        await this.page.locator('#guestFrm_lastname').fill('Doe');
        await this.page.locator('#guestFrm_email').fill('testmail@example.com');
        await this.page.locator('#guestFrm_telephone').fill('1234567890');
        await this.page.locator('#guestFrm_address_1').fill('123 Test St');
        await this.page.locator('#guestFrm_city').fill('Test City');
        await this.page.locator('#guestFrm_postcode').fill('12345');
        await this.page.locator('#guestFrm_country_id').selectOption('Viet Nam');

    }

    async clickOnContinueButton() {
        await this.page.locator('button[title="Continue"]').click();
    }

    
    
}
