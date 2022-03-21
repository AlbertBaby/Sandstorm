const { WebDriver } = require("selenium-webdriver");
let driver = await new Builder().forBrowser('chrome').build();

async function click(locator){
    await driver.findElement(locator).click();
    
}