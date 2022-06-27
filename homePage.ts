import { By, WebDriver } from 'selenium-webdriver'
import {BasePage} from './basePage'

export class HomePage extends BasePage {
    //add selectors below this line and above the constructor line!!//
    welcomeMsg: By = By.xpath("//*[@data-e2e='welcome-message']")
    findAStoreBtn: By = By.linkText("Find a store")

    constructor(driver: WebDriver) {
        super({url: "https://app.starbucks.com/", driver})
    }
}