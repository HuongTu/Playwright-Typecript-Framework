import {Page} from '@playwright/test';
export class CalculatorPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToUrl(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle');
    }

}