const BasePage = require('./basePage');

class HomePage extends BasePage {
    constructor() {
        super();
    }

    //define selectors using getter methods

    get wdioPic() {
        return $('.svg_Eu_K g');
    }

    get subTitle() {
        return $('.hero__subtitle');
    }

    //outline buttons
    get btnGetStarted() {
        return $('.button--secondary:nth-child(1)');
    }

    get btnWatchTalks() {
        return $('.button--secondary:nth-child(2)');
    }

    get btnReadBook() {
        return $('.button--secondary:nth-child(3)');
    }

    get btnTakeCourse() {
        return $('.button--secondary:nth-child(4)');
    }

    get btnSupport() {
        return $('.button--secondary:nth-child(5)');
    }

    //a method to encapsule automation code to interact with the page


    //overwrite specific options to adapt it to page object

}

module.exports = HomePage;