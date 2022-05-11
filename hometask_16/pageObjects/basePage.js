class BasePage {
    constructor() {
    }

    //a method to encapsule automation code to interact with the page
    async navigate(url) {
        await browser.url(url)
    }

    async close() {
        await browser.closeWindow();
    }

}

module.exports = BasePage;