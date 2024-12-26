import { test as baseTest } from "@playwright/test";
import { SignInUpPage } from "../page-objects/signUp_SignInPage";

export const test = baseTest.extend({
  loginPage: async ({ page }, use) => {
    await use(new SignInUpPage(page));
  },
 
});