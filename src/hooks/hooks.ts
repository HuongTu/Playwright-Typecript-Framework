import { Before, After, AfterAll, AfterStep } from '@cucumber/cucumber';
import { CustomWorld } from './world';

// Before hook: Initializes the browser before each scenario
Before(async function (this: CustomWorld) {
  await this.initBrowser();
});

//pickle: doi tuong dai dien cho scenario
After(async function (this: CustomWorld, {pickle}) {
    const img = await this.page.screenshot({ path: `./reports/screenshots/${pickle.name}.png`, type: "png" });
    await this.attach(img, "image/png");
     await this.closeBrowser();
});

AfterAll(async function () {
  // Close the browser after all scenarios
 
});

AfterStep(async function (this: CustomWorld) {
    const img = await this.page.screenshot({ path: `./reports/screenshots/step.png`, type: "png" });
    await this.attach(img, "image/png");
});
