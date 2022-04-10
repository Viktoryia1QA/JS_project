const BasePage = require('./basePage');
const { Builder, By, until } = require('selenium-webdriver');

class HomePage extends BasePage {
    constructor() {
        super();
    }

    get homeButtonNavMenu() {
        return driver.findElement(By.css('.lzy1Td'));
    }

    get chromeExtensionsTab() {
        return driver.findElement(By.xpath('//*[@id="WDxLfe"]//*[contains(@href, "/extensions")]/ancestor::li'));
    }

    get searchButton() {
        return driver.findElement(By.xpath('//div[@class="RBEWZc"]'));
    }

    
}

module.exports = HomePage;