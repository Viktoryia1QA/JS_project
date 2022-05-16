const PageFactory = require('../pageObjects/pageFactory');
const I = new PageFactory();

describe('Check Electrosila website', () => {
    beforeEach(() => {
        cy.visit('https://sila.by');

        cy.clearCookies();

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
        I.Header.checkHeaderLinks()
    })


    it('5. Check Elements by catalog - there is a link and text color change on hover', () => {
        I.Header.checkElementByCatalog(2);
    })

    it('6. Check the link text of catalog-Elements and the title of the corresponding page after clicking on the link', () => {
        I.Header.checkTextAndTitle()
    })

    it('7. Check Search-functionality', () => {
        I.Search.getSearch('Nokia')

    })

    it('8. Check "Add to Cart" after Searching', () => {
        I.Search.getSearch('Nokia')
        I.Cart.checkCart(1)

    })

    it('9. Check "Add to Cart" Through Home-page', () => {
        I.HomePage.selectMenuElement(4)
        I.Cart.checkCart(1)
    })

    it('10. Check "Add to Cart" Through Catalog', () => {
        I.Header.goToCatalogElementPage(3,3)
        I.Cart.checkCart(1)
    })

    it('11. Check navigation from HomePage', () => {
        I.HomePage.checkNavigationHomePage();
    })

});