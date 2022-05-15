class Cart {
    constructor() {
        this.buttonAddToCart = function (numberElement) {
            return cy.get('.btn_zak')
                .eq(numberElement)
        }

        this.buttonClosePopup = function () {
            return cy.get('.btn_popup_close')
        }

        this.buttonPlaceOrder = function () {
            return cy.get('.btn_zak_popup')
        }

        this.qtyItemsInCart = function () {
            return cy.get('.top .top_korz b')
        }

    }

    addToCart(numberElement) {
        this.buttonAddToCart(numberElement)
            .click()
    }

    addToCartAndClosePopup(numberElement) {
        this.buttonAddToCart(numberElement)
            .click()
        this.buttonClosePopup()
            .click()
    }

    ddToCartAndPlaceOrder(numberElement) {
        this.buttonAddToCart(numberElement)
            .click()
        this.buttonPlaceOrder()
            .click()
    }


    checkCart(numberElement, numberClick = 1) {
        this.buttonAddToCart(numberElement)
            .click()
        this.buttonClosePopup()
            .click()
        this.qtyItemsInCart()
            .invoke('text')
            .should('include', numberClick);
    }
}

module.exports = new Cart()