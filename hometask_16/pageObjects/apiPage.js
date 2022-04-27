const BasePage = require('./basePage');

class ApiPage extends BasePage {
    constructor() {
        super();
    }

    //define selectors using getter methods

    get tabIntroduction() {
        return $('.theme-doc-sidebar-menu>li:nth-child(1)>a');
    }

    get tabExpect() {
        return $('.theme-doc-sidebar-menu>li:nth-child(2)>a');
    }

    get tabProtocols() {
        return $('.menu__list>li:nth-child(3)');
    }

    get tabBrowser() {
        return $('.theme-doc-sidebar-menu>li:nth-child(4)');
    }

    get tabElement() {
        return $('.theme-doc-sidebar-menu>li:nth-child(5)');
    }

    get elemClick() {
        return $('//*[@class = "theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item"]/a[contains(text(), "click")]');
    }
    

    get tabMock() {
        return $('.theme-doc-sidebar-menu>li:last-child');
    }

   get headerSelector(){
       return $('header h1');
   }
    
    //a method to encapsule automation code to interact with the page

    async getHeader(timeout = 3000) {
        await this.headerSelector.waitForDisplayed(timeout);
        return this.headerSelector.getText();
    }


    //overwrite specific options to adapt it to page object

}

module.exports = ApiPage;