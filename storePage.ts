import { By, WebDriver } from 'selenium-webdriver'
import {BasePage} from './basePage'

export class StorePage extends BasePage {
    //add selectors below this line and above the constructor line!!//
    findAStoreInput: By = By.xpath("//*[@placeholder='Find a store']")
    watermanStoreBtn: By = By.xpath("//button[@aria-label='Select 40th & Waterman']")
    orderHereBtn: By = By.xpath("//button[@data-e2e='confirmStoreButton']")
    
    constructor(driver: WebDriver) {
        super({url: "https://app.starbucks.com/store-locator?map=39.635307,-101.337891,5z", driver})
    }
}