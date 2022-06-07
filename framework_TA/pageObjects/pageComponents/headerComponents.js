const BasePage = require('../basePage');
const { expect } = require('@playwright/test');

class Header extends BasePage {
    constructor(page) {
        super(page);

        this.menuTabs = function (number) {
            return page.locator('.b-main-navigation__item>a')
                .nth(number);
        }
        this.logoTab = function () {
            return page.locator('.b-top-logo>a');
        }
        this.catalogTab = function () {
            return page.locator('.b-main-navigation__item>a')
                .nth(1);
        }
    }

    async selectMenuTabByNumber(menuTab) {
        await menuTab.waitFor('visible');
        await menuTab.click();
    }

    // Check all links in the Header
    async checkHeaderLinks() {
        let tabs = ['Каталог', 'Новости', 'Автобарахолка', 'Дома и квартиры', 'Форум', 'Услуги'];
        let title = ['Каталог Onlíner', 'Onliner', 'Автобарахолка', 'Купить квартиру в Минске', 'Форум onliner.by - Главная страница', 'Заказы на услуги'];
        let i = 0;
        for (i = 0; i < tabs.length; i++) {
            await page.locator(`nav span:has-text("${(tabs[i])}")`).waitFor('visible');
            await page.locator(`nav span:has-text("${(tabs[i])}")`).click();
            await expect(page).toHaveTitle(`${title[i]}`);
        }
    }

    async goToHomePage() {
        await this.logoTab().waitFor('visible');
        await this.logoTab().click();
    }
}



module.exports = Header;