/// <reference types="cypress" />

describe("Verify Autocomplete dropwdown lists via webdriveruni", () => {
    it("Select specific product via autocomplete list", () => {
        cy.visit("http://www.webdriveruniversity.com")

        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})

        // type the first letter to trigger a list of autocomplete suggestions
        cy.get('#myInput').type('A')

        // get the autocomplete list and select an item
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const productToSelect = 'Avacado'
            if($el.text() === productToSelect) {
                // click to select an item
                // $el.click(); <-- deprecated
                $el.trigger('click')

                cy.get('#submit-button').click()
                
                // validate using the url
                cy.url().should('include', productToSelect)
            }
        })
        .then(function (){
            // challenge lesson 126
            // after the above test, chain another test and select Grapes
            cy.get('#myInput').type('G')
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const productToSelect = 'Grapes'
                if($el.text() === productToSelect) {
                    $el.trigger('click')
                    cy.get('#submit-button').click();
                    cy.url().should('include', productToSelect)
                }
            })
        })
    });
})