import {Given, When, Then} from '@cucumber/cucumber';
import { CustomWorld } from '../../hooks/world';

Given('I navigate to the Support Go Where page', async function (this: CustomWorld) {
    await this.calculatorPage.navigateToUrl('https://supportgowhere.life.gov.sg/budget/support-calculator/form');
});
