/// <reference types="cypress" />

describe("Verify radio buttons via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })

    it("Check specific radio buttons", () => {       
		// get all radio buttons, then check the first radio button using first()
		cy.get('#radio-buttons').find("[type='radio']").first().check()
        
		// get all radio buttons, then using index no., check one using eq()
		cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
    });

    it("Validate the states of specific radio buttons", () => {	
		// validate whether a radio button is checked or unchecked
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')

		// validate that when a radio button is checked, 
		// the previous checked radio button is unchecked
        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
        cy.get("[value='pumpkin']").should('not.be.checked')
		
		// validate if radio button is disabled
        cy.get("[value='cabbage']").should('be.disabled')
    });
})