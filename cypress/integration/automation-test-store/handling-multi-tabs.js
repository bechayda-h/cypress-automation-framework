/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        
		// How to handle child windows/multiple tab
		// use jQuery removeAttr method to remove attribute target 
		cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        
		cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Joe");
        cy.get('[name="last_name"]').type("blogs");
        cy.get('[name="email"]').type("joe_blogs123@gmail.com")
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });
})