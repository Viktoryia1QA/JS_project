class Header {
    constructor() {

        this.btnCatalog = () => {
            return cy.get(`.top .top_transp__btn`);
        }

        this.mainCatalogElement = function (numberElement) {
            return cy.get('.header_menu_sub__wrap>div')
                .eq(numberElement);
        }

        this.mainCatalogElementLink = function (numberElement) {
            return cy.get('.header_menu_sub__wrap>div>a')
                .eq(numberElement);
        }

        this.mainCatalogSubElement = function (numberSubElement) {
            return cy.get('.header_menu_under__item-open .header_menu_under__item a')
                .eq(numberSubElement);
        }

    }

    // Check all links in the Header
    checkHeaderLinks() {
        let pages = ['Акции', 'Доставка и оплата', 'Подарочные сертификаты', 'Бонусные карты', 'Оплата частями', 'Помощь покупателю'];
        let paths = ['action', 'delivery', 'podarochnyye_sertifikaty', 'diskont', 'kredit', 'faq'];
        let i = 0;
        for (i = 0; i < paths.length; i++) {
            cy.contains(pages[i]).click();
            cy.location('pathname').should('include', `${paths[i]}`);
            cy.go('back');
        }

    }

    // there is a link and text color change on hover
    checkElementByCatalog(numberElement) {
        this.btnCatalog().click();
        this.mainCatalogElement(numberElement)
            .trigger('mouseover');
        this.mainCatalogElement(numberElement)
            .should('have.class', 'hover_link_menu')
        this.mainCatalogElementLink(numberElement)
            .should('have.css', 'color', 'rgb(230, 0, 0)');
    }

    //go to Element-page through Catalog
    goToCatalogElementPage(numberElement, numberSubElement) {

        this.btnCatalog()
            .click();

        this.mainCatalogElement(numberElement)
            .click();
        this.mainCatalogSubElement(numberSubElement)
            .invoke('attr', 'href')
            .then(href => {
                cy.visit(href);
            });
    }

    //get text from link
    getTextfromLinkElementCatalog(numberElement, numberSubElement) {

        this.btnCatalog().click();
        this.mainCatalogElement(numberElement)
            .click();
        // debugger

        return this.mainCatalogSubElement(numberSubElement).invoke('text')
    }

    // Check the link text and the title of the corresponding page after clicking on the link
    checkTextAndTitle(numberElement = 3, numberSubElement = 3, verifiedText = 'Игровые приставки') {
        this.btnCatalog().click();
        this.mainCatalogElement(numberElement)
            .click();
        this.mainCatalogSubElement(numberSubElement).invoke('text')
        cy.should('include', verifiedText);

        cy.reload();
        this.btnCatalog()
            .click();
        this.mainCatalogElement(numberElement)
            .click();
        this.mainCatalogSubElement(numberSubElement)
            .invoke('attr', 'href')
            .then(href => {
                cy.visit(href);
            });

        cy.get('h1')
            .invoke('text')
            .should('include', verifiedText)

    }

}


module.exports = new Header()