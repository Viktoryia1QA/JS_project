const { Builder, By, until } = require('selenium-webdriver');
const BasePage = require('../basePage');

class SearchComponents extends BasePage {
    constructor() {
        super();
    }
    get searchButton() {
        return driver.findElement(By.xpath('//div[@class="RBEWZc"]'));
    }

    get searchField() {
        return driver.findElement(By.xpath('//input[@class="whsOnd zHQkBf"]'));
    }

    get submitSearchButton() {
        return driver.findElement(By.css('.U26fgb.mUbCce.fKz7Od.i3PoXe.M9Bg4d .vu8Pwe'));
    }

    get resultsOnThisSite() {
        return driver.findElement(By.css('.x8xhwb'));
    }

    get searchResultDescription() {
        return driver.findElements(By.css('.yDWqEe'));
    }



    get checkTextMainTitle() {
        return driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/*[contains(text(), ChromeDriver)]'));
    }

    get getTitle() {
        return driver.getTitle();
    }

    get getCurrentUrl() {
        return driver.getCurrentUrl();
    }


}

module.exports = SearchComponents;