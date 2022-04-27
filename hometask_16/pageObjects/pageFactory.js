const BasePage = require('./basePage');
const HomePage = require('./homePage');
const ApiPage = require('./apiPage');
const Header = require('./pageComponents/header');
const SearchComponents = require('./pageComponents/searchComponents');
const BaseElement = require('../helpers/baseElements');

class PageFactory {
    constructor() {
        this.basePage = new BasePage();
        this.homePage = new HomePage();
        this.apiPage = new ApiPage();
        this.header = new Header();           
        this.searchComponents = new SearchComponents();           
        this.baseElement = new BaseElement();
    }
}

module.exports = PageFactory;