import { By, WebDriver } from 'selenium-webdriver'
import {BasePage} from './basePage'

export class MenuPage extends BasePage {
    //add selectors below this line and above the constructor line!!//
    storeName: By = By.xpath("//*[@href='/menu/store-locator']")
    hotCoffeeBtn: By = By.xpath("//*[@data-e2e='Hot Coffees']")
    caffeAmericanoBtn: By = By.xpath("//*[@data-e2e='Caffè Americano']/../..")
    addToOrder: By = By.xpath("//*[@data-e2e='add-to-order-button']")
    cart: By = By.xpath("//*[@data-e2e='open-cart-button']")
    tallBtn: By = By.xpath("//*[@id='Tall']/..")
    flavorBtn: By = By.xpath("//*[@data-e2e='option-Flavors']")
    caramelBtn: By = By.xpath("//*[@aria-labelledby='CaramelSyrupVisibleLabel']")
    doneBtn: By = By.xpath("//*[@data-e2e='doneFrap']")
    updateBtn: By = By.xpath("//*[@data-e2e='update-item-button']")
    
    
    constructor(driver: WebDriver) {
        super({url: "https://app.starbucks.com/menu", driver})
    }
}