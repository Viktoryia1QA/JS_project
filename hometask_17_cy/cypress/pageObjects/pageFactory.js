const HomePage = require('./homePage');
const Search = require('../pageObjects/pageComponents/searchComponents');
const Cart = require('../pageObjects/pageComponents/cartComponents');
const Header = require('../pageObjects/pageComponents/headerComponents');

class PageFactory {
    constructor() {
        this.HomePage = new HomePage();
        this.Search = new Search();
        this.Cart = new Cart();
        this.Header = new Header();
    }
}

module.exports = PageFactory;