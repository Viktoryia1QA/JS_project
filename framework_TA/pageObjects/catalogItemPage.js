const BasePage = require('./basePage');
const { expect } = require('@playwright/test');

class CatalogItemPage extends BasePage {
    constructor(page) {
        super(page);

        this.itemCatalogTitle = function () {
            return page.locator('h1.catalog-masthead__title');
        }
        //checkboxes
        this.checkboxAddToCompareOnItemPage = function () {
            return page.locator('#product-compare-control .i-checkbox__faux');
        }
        this.checkboxAddToBookmarks = function () {
            return page.locator('#product-bookmark-control .i-checkbox__faux');
        }
        this.checkboxFollowToSuperPrice = function () {
            return page.locator('.offers-description__checkbox-list .i-checkbox__faux');
        }
        //buttons
        this.buttonBuyNow = function (tabNumber) {
            return page.locator('.product-aside__control>a:nth-child(odd)')
                .nth(tabNumber);
        }
        this.buttonaddToCart = function (tabNumber) {
            return page.locator('.product-aside__control>a:nth-child(even)')
                .nth(tabNumber);
        }
        this.buttonYesFromMinsk = function () {
            return page.locator('span.button-style.product-aside__button');
        }
        this.buttonShowAllsuggestion = function () {
            return page.locator('.offers-list__button_show');
        }


        //links
        this.linkAllOffers = function () {
            return page.locator('.product-aside__description_extended>a');
        }
        this.linkSortByDefault = function () {
            return page.locator('.input-style__real');
        }
        this.linkSortingByNumber = function (number) {
            return page.locator('.input-style__real>option')
                .nth(number);
        }
        this.linkSortAscending = function () {
            return page.locator('.input-style__real>option:nth-child(2)');
        }
        this.linkSortDescending = function () {
            return page.locator('.input-style__real>option:nth-child(3)');
        }
        this.linkSortByRating = function () {
            return page.locator('.input-style__real>option:nth-child(4)');
        }
        //Price
        this.listOfPrice = function () {
            return page.locator('.offers-list__description.offers-list__description_nodecor');
        }
        this.listOfPriceByNumber = function (number) {
            return page.locator('.offers-list__description.offers-list__description_nodecor')
                .nth(number);
        }

    }

    //make sorting on Item Catalog-page: 0 - default; 1 - Asc; 2 - Desc; 3 - by Rating.
    async makeSortingOnItemCatalogPage(number) {
        await this.buttonYesFromMinsk().waitFor('visible');
        await this.buttonYesFromMinsk().click();
        await this.linkAllOffers().waitFor('visible');
        await this.linkAllOffers().click();
        await this.linkSortByDefault().waitFor('visible');
        await this.linkSortByDefault().click();
        await this.linkSortingByNumber(number).waitFor('visible');
        await this.linkSortingByNumber(number).click();

    }

    async getSortingOnItemCatalogPage() {
        await this.buttonShowAllsuggestion().waitFor('visible');
        await this.buttonShowAllsuggestion().click();
        let listOfPrice = await this.listOfPrice().allTextContents();
        return listOfPrice.sort((a, b) => a - b);
    }

}

module.exports = CatalogItemPage;