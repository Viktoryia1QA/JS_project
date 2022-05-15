const Header = require('../pageObjects/pageComponents/headerComponents');
const Search = require('../pageObjects/pageComponents/searchComponents');
const Cart = require('../pageObjects/pageComponents/cartComponents');
const HomePage = require('../pageObjects/homePage');

describe('Check Electrosila website', () => {
    beforeEach(() => {
        cy.visit('https://sila.by');

        cy.clearCookies();

        cy.get('h1')
            .as('title');

    })

    it('1. Check web version of website sila.by', () => {
        cy.window().should('have.property', 'IS_WEB')
            .and('eq', true)
    })

    it('2. Check encoding of website sila.by', () => {
        cy.document().should('have.property', 'charset')
            .and('eq', 'windows-1251')
    })

    it('3. Check title on Home-page website sila.by', () => {
        cy.title()
            .should('include', '«ЭЛЕКТРОСИЛА» - интернет-магазин бытовой техники в Минске')
    })

    it('4. Check all links in the Header', () => {
        Header.checkHeaderLinks()
    })


    it('5. Check Elements by catalog - there is a link and text color change on hover', () => {
        Header.checkElementByCatalog(2);
    })

    it('6. Check the link text of catalog-Elements and the title of the corresponding page after clicking on the link', () => {
        Header.checkTextAndTitle()
    })

    it('7. Check Search-functionality', () => {
        Search.getSearch('Nokia')

    })

    it('8. Check "Add to Cart" after Searching', () => {
        Search.getSearch('Nokia')
        Cart.checkCart(1)

    })

    it('9. Check "Add to Cart" Through Home-page', () => {
        HomePage.selectMenuElement(4)
        Cart.checkCart(1)
    })

    it('10. Check navigation from HomePage', () => {
        HomePage.checkNavigationHomePage();
    })

});