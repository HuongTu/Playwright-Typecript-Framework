import { page, expect} from "playwright/test";
const {POManager} = require("../page-objects/POManger")
import {test} from "../fixtures/BasePage"



test.beforeAll(async ({ browser}) => {
    
})


test('Login to system successfully', async ({ loginPage, page }) => {
    await page.goto("https://practice.sdetunicorns.com/")
    await console.log("Open broswer")
    await loginPage.fillUpLoginForm();
    await loginPage.clickOnLoginBtn();
})
