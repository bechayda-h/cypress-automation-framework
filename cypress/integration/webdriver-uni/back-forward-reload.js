/// <reference types="cypress" />

describe("Validate webdriveruni homepage links", () => {
    it("Confirm links redirect to the correct pages", () => {
      cy.visit("http://www.webdriveruniversity.com")
		
	    // remove attribute target to prevent opening in new tab
	    // and force open the link in the same tab
	    // this is a workaround for one of cypress's limitation
	    // click({force:true} forces the click action, bypassing other checks (ex. whether the element is visible or clickable) 
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        
		cy.url().should('include', 'contactus')

        cy.go('back')
        
        // reload
        // cy.reload(true) //reload without using cache
        cy.reload()
        
        cy.url().should('include', 'http://www.webdriveruniversity.com/')
        

        cy.go('forward')
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')
        cy.go('back')

    });

    // back-foward-reload challenge lesson 103
    it.only("Confirm links redirect to the correct pages", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
        cy.url().should('include', 'http://www.webdriveruniversity.com/')
    })
})