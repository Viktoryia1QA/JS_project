const BasePage = require('../basePage');
const { expect } = require('@playwright/test');

class Comparison extends BasePage {
    constructor(page) {
        super(page);

        this.buttonComparison = function () {
            return page.locator('.compare-button__inner-container span:not(.compare-button__icon_trash)')
        }
        this.buttonDeleteFromComparison = function () {
            return page.locator('.compare-button__icon_trash')
        }
        this.titleComparisonPage = function () {
            return page.locator('h1.b-offers-title')
        }
    }

}



module.exports = Comparison;