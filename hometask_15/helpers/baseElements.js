const { Builder, By, until } = require('selenium-webdriver');
const BasePage = require('../pageObject/basePage');

class BaseElements extends BasePage {
    constructor() {
        super();
    }

    async click(element, waitTime = 1000) {
        await driver.wait(until.elementIsVisible(element), waitTime);
        await element.click();
    }

    async sendKeys(element, text, waitTime = 5000) {
        await driver.wait(until.elementIsVisible(element), waitTime);
        await element.sendKeys(text);
    }

    async dragAndDrop(element, x = 0, y = 0, waitTime = 5000) {
        await driver.wait(until.elementIsVisible(element), waitTime);
        await driver.actions().dragAndDrop(element, { x: x, y: y }).perform();
    }

    async scrollIntoView(element, waitTime = 5000) {
        await driver.wait(until.elementIsVisible(element), waitTime);
        await driver.executeScript("arguments[0].scrollIntoView();", element);
    }

    async moveToView(element, waitTime = 5000) {
        await driver.wait(until.elementIsVisible(element), waitTime);
        await driver.actions().move({ origin: element }).perform();
    }

}

module.exports = BaseElements;