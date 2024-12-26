import { Page } from "playwright/test"
import {SignInUpPage} from './signUp_SignInPage'

class POManager{
    readonly signInUpPage
    readonly page

    constructor(page: Page){
        this.page = page
        this.signInUpPage = new SignInUpPage(this.page)
    }

    getSignInUpPage(){
        return this.signInUpPage
    }
}

module.exports = {POManager}