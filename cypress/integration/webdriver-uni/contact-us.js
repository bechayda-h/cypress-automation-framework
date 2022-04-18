import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'

/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    const HomePage = new HomePage_PO;
	const contact_Us_PO = new Contact_Us_PO();
    
	before(function(){
        cy.fixture('example').then(function(data) {
            // this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        HomePage.visitHompage();
        HomePage.clickOn_ContactUs_Button(); 
    })

    it.only("Should be able to submit a successful submission via contact us form", () => {
        // Assert the active page's property
        cy.document().should('have.property','charset').and('eq','UTF-8')
        
        // Assert the active page's title
        cy.title().should('eq','WebDriver | Contact Us')
        
        // cy.get('[name="first_name"]').type(data.firstName)
        // cy.get('[name="last_name"]').type(data.lastName)
        // cy.get('[name="email"]').type(data.email)
        // cy.get('#contact_form > textarea').type(data.comment)
        // cy.get('[type="submit"]').click()

        // // Assert an element's text value
        // cy.get("#contact_reply > h1").should('have.text', 'Thank You for your Message!')

        // using custom command
        // cy.webdriverUni_ContactForm_Submission(data.firstName, data.lastName,data.email, data.comment, "#contact_reply > h1", "Thank You for your Message!")
		contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.lastName, data.email, "How can I learn Cypress?", "h1", "Thank You for your Message!");
		
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Biden")
        // cy.get('[name="email"]').type("email@domain.com")
        cy.get('#contact_form > textarea').type("no comment")
        cy.get('[type="submit"]').click()
        // cy.get("#contact_reply > h1").should('have.text', 'Thank You for your Message!')
        cy.get('body').contains('Error: all fields are required')
		contact_Us_PO.contactForm_Submission(data.first_name, data.last_name," ", "How can I learn Cypress?", "body", "Error: Invalid email address")
    })
})