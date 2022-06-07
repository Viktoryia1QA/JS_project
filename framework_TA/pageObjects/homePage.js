const BasePage = require('./basePage');
const { expect } = require('@playwright/test');

class HomePage extends BasePage {
    constructor(page) {
        super(page);

        this.menuBarTabs = function () {
            return page.locator('.project-navigation__sign');
        }
        this.menuBarTabsByNumber = function (number) {
            return page.locator('.project-navigation__sign')
                .nth(number);
        }
        this.scrollInMenuBar = function () {
            return page.locator('.project-navigation__flex');
        }
        this.mainTilesTabs = function () {
            return page.locator('.b-tiles-outer  .b-tile-main');
        }
        this.mainTilesTabsByNumber = function (number) {
            return page.locator('.b-tiles-outer  .b-tile-main')
                .nth(number);
        }

        this.titleOfMainTilesTabsByNumber = function (number) {
            return page.locator('.b-tiles-outer  .b-tile-main .txt')
                .nth(number);
        }

        this.linkCatalog = function () {
            return page.locator('#onliner-catalog-purchases h2');
        }

        

    }
    async getTitleTextMainTilesTab(numberTextTilesTab = 0) {
        await this.titleOfMainTilesTabsByNumber(numberTextTilesTab).waitFor('visible');
        return this.titleOfMainTilesTabsByNumber(numberTextTilesTab).textContent();
    }

    async goToMainTilesTabPage(numberTilesTab = 1) {
        await this.mainTilesTabsByNumber(numberTilesTab).waitFor('visible');
        await this.mainTilesTabsByNumber(numberTilesTab).click();
    }

}

module.exports = HomePage;