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

        //links
        this.linkAllOffers = function () {
            return page.locator('.product-aside__description_extended');
        }
      
    }
    


}

module.exports = CatalogItemPage;