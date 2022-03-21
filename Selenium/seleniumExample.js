const{Builder, By, Key, until} = require('selenium-webdriver');
require('chromedriver');


async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://www.google.com');
    
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    driver.close
}
example();
