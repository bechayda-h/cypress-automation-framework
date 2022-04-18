/// <reference types="cypress" />

// visiting 2 different superdomains are not allowed (browser security feature)
// However, one work-around is to disable the security feature in the browser's settings
// add the following in cypress.json (for chrome and electron):
//   "chromeWebSecurity": false

describe("Cypress web security", () => {
    it("Validate visiting two different domains", () => {
				// even if web security is disabled the following will still fail
		// reason is due to cy.visit() still enforces the security despite the settings
		// reference https://github.com/cypress-io/cypress/issues/944
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://www.google.com');
    });

    it("Validate visiting two different domains via user actions", () => {
		cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });
})