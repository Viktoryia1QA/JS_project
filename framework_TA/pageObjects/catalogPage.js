const BasePage = require('./basePage');
const { expect } = require('@playwright/test');

class CatalogPage extends BasePage {
    constructor(page) {
        super(page);

        // Structure: Menu Catalog Tabs -> Menu Catalog Dropdown List -> Menu Catalog Tiles Tabs
        //Menu Catalog Tabs 
        this.menuCatalogTabs = function () {
            return page.locator('.catalog-navigation-classifier__item');
        }
        this.menuCatalogTabsByNumber = function (tabNumber) {
            return page.locator('.catalog-navigation-classifier__item')
                .nth(tabNumber);
        }
        //Menu Catalog Dropdown List 
        this.menuCatalogDropdownList = function () {
            return page.locator('.catalog-navigation-list__aside_active .catalog-navigation-list__aside-list>div');
        }
        this.menuCatalogDropdownListitemByNumber = function (listItemNumber) {
            return page.locator('.catalog-navigation-list__aside_active .catalog-navigation-list__aside-list>div')
                .nth(listItemNumber);
        }
        //Menu Catalog Tiles Tabs
        this.menuCatalogTilesTabs = function () {
            return page.locator('.catalog-navigation-list__aside-item_active .catalog-navigation-list__dropdown-list>a');
        }
        this.menuCatalogTilesTabsByNumber = function (tileTabNumber) {
            return page.locator('.catalog-navigation-list__aside-item_active .catalog-navigation-list__dropdown-list>a')
                .nth(tileTabNumber);
        }
        //checkBoxes 
        this.checkboxByProducerByNumber = function (number) {
            return page.locator('.schema-filter__list>li .i-checkbox')
                .nth(number);
        }
        this.filterBoxByNumber = function (number) {
            return page.locator('.schema-tags__text')
                .nth(number);
        }

        this.checkboxAddToCompareOnCatalog = function (number) {
            return page.locator('.i-checkbox.i-checkbox_yellow')
                .nth(number);
        }
        //links
        this.linkItemByNumber = function (number) {
            return page.locator('.schema-product__title>a')
                .nth(number);
        }
        this.linkNameItemByNumber = function (number) {
            return page.locator('.schema-product__title>a>span')
                .nth(number);
        }
    }
    async goToMenuCatalogItemPage(tabNumber = 2, listItemNumber = 4, tileTabNumber = 2) {
        await this.menuCatalogTabsByNumber(tabNumber).waitFor('visible');
        await this.menuCatalogTabsByNumber(tabNumber).click();
        await page.mouse.wheel(-100, 100);
        await page.mouse.wheel(0, 100);
        await page.mouse.click(0, 200);
        await this.menuCatalogDropdownListitemByNumber(listItemNumber).waitFor('visible');
        await this.menuCatalogDropdownListitemByNumber(listItemNumber).hover();
        await this.menuCatalogTilesTabsByNumber(tileTabNumber).waitFor('visible');
        await this.menuCatalogTilesTabsByNumber(tileTabNumber).click();
    }




}

module.exports = CatalogPage;