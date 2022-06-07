class BasePage {
    constructor(page) {
        global.page = page;
        this.mainTitle = function () {
            return page.locator('h1');
        }
        this.newsMainTitle = function () {
            return page.locator('.news-header__title h1');
        }
    }

    async navigate(url) {
        await this.page.goto(url);
    }
}

module.exports = BasePage;