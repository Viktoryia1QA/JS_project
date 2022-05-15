class HomePage {
    constructor() {


        this.mainMenuElement = function (number) {
            return cy.get('.header_menu__container div')
                .eq(number);
        }

        this.mainMenu = function () {
            return cy.get('nav .header_menu__wrap');
        }

    }

    selectMenuElement(number) {

        this.mainMenuElement(number)
            .click();
    }

    // Check navigation from HomePage
    checkNavigationHomePage() {
        this.mainMenu().contains('Телевизоры').click()
        cy.location('pathname').should('include', 'televizory')
        
        cy.go('back')
        cy.location('pathname').should('not.include', 'televizory')

        cy.go('forward')
        cy.location('pathname').should('include', 'televizory')
        cy.reload()
    }


}

module.exports = new HomePage()