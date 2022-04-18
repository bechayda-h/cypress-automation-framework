/// <reference types="cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific values via select dropdown lists", () => {
        cy.visit("http://www.webdriveruniversity.com")
        
		cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

		// selecting and validating from the dropdown list using value attribute
        cy.get('#dropdowm-menu-1').select('c#')       
		cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
        
		// selecting from the dropdown list using text
		// and validating using value attribute
		// NOTE: 
		// text() will yield all dropdown list texts, 
		// so for validation use value attribute instead
		cy.get('#dropdowm-menu-3').select('JQuery').should('have.value', 'jquery')
		
		// challenge lesson 121
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
		cy.get('#dropdowm-menu-2').select('TestNG').should('have.value', 'testng')
    });
})