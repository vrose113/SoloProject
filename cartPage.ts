import { By, WebDriver } from 'selenium-webdriver'
import {BasePage} from './basePage'

export class CartPage extends BasePage {
    //add selectors below this line and above the constructor line!!//
    cartItem: By = By.xpath("//*[@data-e2e='heading']")
    removeBtn: By = By.xpath("//*[@data-e2e='decreaseQuantityButton']")
    emptyCart: By = By.xpath("//*[@tabindex='-1']")
    caffeAmericano: By = By.xpath("//*[@aria-label='Edit Caffè Americano']")
    tall: By = By.xpath("//*[@data-e2e='cart-item-options']")

    constructor(driver: WebDriver) {
        super({url: "https://app.starbucks.com/menu/cart", driver})
    }
}
