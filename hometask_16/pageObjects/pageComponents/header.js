const BasePage = require('../../pageObjects/basePage')

class Header extends BasePage {
    constructor() {
        super();
    }

    //define selectors using getter methods

    get homePageButton() {
        return $('.navbar__logo');
    }

    get docsButton() {
        return $('//a[contains(text(), "Docs")]');
    }

    get apiButton() {
        return $('//*[@class="navbar navbar--fixed-top"]//*[contains(text(), "API")]');
    }

    get blogButton() {
        return $('//*[@class="navbar navbar--fixed-top"]//*[contains(text(), "Blog")]');
    }

    get contributeButton() {
        return $('//*[@class="navbar navbar--fixed-top"]//*[contains(text(), "Contribute")]');
    }

    get communityButton() {
        return $('//*[@class="navbar navbar--fixed-top"]//*[contains(text(), "Community")]');
    }

    get versionsButton() {
        return $('.navbar__link[href="/versions"]');
    }

    get githubButton() {
        return $('.navbar__link.header-github-link');
    }

    get modeSwitcherButton() {
        return $('.toggleButton_rCf9');
    }


    get fieldSwithMode() {
        return $('.docs-version-current');
    }

    //a method to encapsule automation code to interact with the page

    async getTheme(atribute = 'data-theme', timeout = 3000) {
        await this.fieldSwithMode.waitForDisplayed(timeout);
        return this.fieldSwithMode.getAttribute(atribute);
    }

}


module.exports = Header;