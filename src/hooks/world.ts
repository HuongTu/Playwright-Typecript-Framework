// src/test/support/world.ts
import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { LoginPage } from '../tests/pages/loginPage';
import { CalculatorPage } from '../tests/pages/supportgowhere/calculatorPage';
import { HomePage } from '../tests/pages/homePage';

// Define the CustomWorld class that extends Cucumber's World class
export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  loginPage!: LoginPage;
  calculatorPage !: CalculatorPage
  homePage !: HomePage //non-null asertion operator

  constructor(options: IWorldOptions) {
    super(options);
  }

  // Initialize browser and page before each scenario
  async initBrowser() {
    this.browser = await chromium.launch({ headless: false });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    this.loginPage = new LoginPage(this.page);
    this.calculatorPage = new CalculatorPage(this.page) 
    this.homePage = new HomePage(this.page);// Instantiate LoginPage
  
  }

  // Close the browser after each scenario
  async closeBrowser() {
    await this.browser.close();
  }
}

// Set CustomWorld as the constructor for the World class
setWorldConstructor(CustomWorld);
