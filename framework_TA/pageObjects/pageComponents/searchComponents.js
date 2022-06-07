const BasePage = require('../basePage');
const { expect } = require('@playwright/test');

class Search extends BasePage {
    constructor(page) {
        super(page);

        this.fieldSearch = function () {
            return page.locator('.fast-search__input');
        }
        //0 - "в каталоге", 1 - "в новостях", 2 -  "на барахолке", 3 - "на форуме" 
        this.tabSearchByNumber = function (number) {
            return page.frameLocator('.modal-iframe').locator('.search__tabs-item')
                .nth(number);
        }

        this.resultSearchByNumber = function (number) {
            return page.frameLocator('.modal-iframe').locator('.search__result')
                .nth(number);
        }

    }

    async selectTabSearchByNumber(searchTab) {
        await searchTab.waitFor('visible');
        await searchTab.click();
    }

    // get search , default = search by Catalog/first result
    // tabSearchByNumber(number) - 0 - "в каталоге", 1 - "в новостях", 2 -  "на барахолке", 3 - "на форуме" 
    async getSearchUniversal(text, tabSearchByNumber = this.tabSearchByNumber(0), resultSearchByNumber = this.resultSearchByNumber(0)) {
        await this.fieldSearch().waitFor('visible');
        await this.fieldSearch().fill(text);
        await tabSearchByNumber.waitFor('visible');
        await tabSearchByNumber.click();
        await resultSearchByNumber.waitFor('visible');
        await resultSearchByNumber.click();
    }

    // get search by Catalog. Default result - first result
    async getSearchByCatalog(text, resultSearchByNumber = this.resultSearchByNumber(0)) {
        await this.fieldSearch().waitFor('visible');
        await this.fieldSearch().fill(text);
        await this.tabSearchByNumber(0).waitFor('visible');
        await this.tabSearchByNumber(0).click();
        await resultSearchByNumber.waitFor('visible');
        await resultSearchByNumber.click();
    }

    // check search , default = search by Catalog/first result
    // tabSearchByNumber(number) - 0 - "в каталоге", 1 - "в новостях", 2 -  "на барахолке", 3 - "на форуме" 
    async checkSearch(text, tabSearchByNumber = this.tabSearchByNumber(0), resultSearchByNumber = this.resultSearchByNumber(0)) {
        await this.fieldSearch().waitFor('visible');
        await this.fieldSearch().fill(text);
        await tabSearchByNumber.waitFor('visible');
        await tabSearchByNumber.click();
        await resultSearchByNumber.waitFor('visible');
        await resultSearchByNumber.click();
        const resultOfSearch = await (await this.mainTitle().innerText()).toLowerCase();
        await expect(resultOfSearch).toContain(text);
    }

}



module.exports = Search;