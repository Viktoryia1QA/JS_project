class Search {
    constructor() {

        this.searchButton = () => {
            return cy.get(`.top [type="submit"]`);
        }

        this.searchField = function () {
            return cy.get('.top .ui-autocomplete-input');
        }

    }

    // Check search-functionality
    getSearch(text) {
        this.searchField()
            .type(text)
        this.searchButton()
            .click()

        cy.location('pathname').should('include', text)
        cy.get('h1')
            .invoke('text')
            .should('include', text);
    }

}


module.exports = Search