import { SignInPage } from "./signInPage";
import { HomePage } from "./homePage";
import { StorePage } from "./storePage";
import { MenuPage } from "./menuPage";
import { CartPage } from "./cartPage";
import { Builder, Capabilities, WebDriver } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .setChromeOptions(new Options().addArguments("kiosk"))
  .build();

const signInPage = new SignInPage(driver);
const homePage = new HomePage(driver);
const storePage = new StorePage(driver);
const menuPage = new MenuPage(driver);
const cartPage = new CartPage(driver);

describe("Starbucks", () => {
    beforeAll(async () => {
        await homePage.navigate();
    });
    afterAll(async () => {
        await driver.quit();
    })
    
    test("Find a Store", async () =>{
        await homePage.click(homePage.findAStoreBtn);
        await storePage.setInput(storePage.findAStoreInput, "92325\n");
        await storePage.click(storePage.watermanStoreBtn);
        await storePage.click(storePage.orderHereBtn);
        const result = await menuPage.getText(menuPage.storeName);
        expect(result.toLowerCase()).toContain("40th & waterman");
    })
    test("Order a drink", async () =>{
        await menuPage.click(menuPage.hotCoffeeBtn);
        await menuPage.click(menuPage.caffeAmericanoBtn);
        await menuPage.click(menuPage.addToOrder);
        await menuPage.click(menuPage.cart);
        const result = await cartPage.getText(cartPage.cartItem);
        expect (result.toLowerCase()).toContain("caffè americano");
    })
    test("Edit a drink", async () =>{
        await cartPage.click(cartPage.caffeAmericano);
        await menuPage.scrollDown(4);
        await menuPage.click(menuPage.tallBtn);
        await menuPage.click(menuPage.flavorBtn);
        await menuPage.click(menuPage.caramelBtn);
        await menuPage.click(menuPage.doneBtn);
        await menuPage.click(menuPage.updateBtn);
        const result = await cartPage.getText(cartPage.tall);
        expect (result.toLowerCase()).toContain("tall");
    })
    test("Remove from Order", async () => {
        await cartPage.click(cartPage.removeBtn);
        const result = await cartPage.getText(cartPage.emptyCart);
        expect (result.toLowerCase()).toContain("review order (0)");
    })
})