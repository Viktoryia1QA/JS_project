const BasePage = require('./basePage');
const HomePage = require('./homePage');
const CatalogPage = require('./catalogPage');
const CatalogItemPage = require('./catalogItemPage');
const BaseElements = require('../helpers/baseElements');
const Header = require('./pageComponents/headerComponents');
const Search = require('./pageComponents/searchComponents');
const Comparison = require('./pageComponents/comparisonComponents');
const Authentication = require('./pageComponents/authenticationComponents');

class PageFactory {
    constructor(page) {
        this.basePage = new BasePage(page);
        this.homePage = new HomePage(page);
        this.catalogPage = new CatalogPage(page);
        this.catalogItemPage = new CatalogItemPage(page);
        this.action = new BaseElements(page);
        this.header = new Header(page);
        this.search = new Search(page);
        this.comparison = new Comparison(page);
        this.authentication = new Authentication(page);
    }
}

module.exports = PageFactory;