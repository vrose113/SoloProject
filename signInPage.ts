import { By, WebDriver } from 'selenium-webdriver'
import {BasePage} from './basePage'

export class SignInPage extends BasePage {
    //add selectors below this line and above the constructor line!!//
    cookiesAgreeBtn: By = By.id("truste-consent-button")
    emailInput: By = By.id("username")
    passwordInput: By = By.id("password")
    constructor(driver: WebDriver) {
        super({url: "https://app.starbucks.com/account/signin?returnUrl=https%3A%2F%2Fapp.starbucks.com%2F", driver})
    }
}