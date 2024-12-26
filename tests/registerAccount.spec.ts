import { Page } from "playwright/test";
const {POManager} = require("../page-objects/POManger")
import {test} from "../fixtures/BasePage"

test('register account success', async ({loginPage, page}) => {
    // const poManager = new POManager(page)
    // const loginPage = poManager.getSignInUpPage()
    await page.goto("https://practice.sdetunicorns.com/")
    await console.log("Open broswer")
    await loginPage.fillUpRegisterForm()
    await loginPage.clickOnRegisterBtn()
    await loginPage.verifyCreateAccountSuccessfully()
})