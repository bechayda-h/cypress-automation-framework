/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    before(() => {
        // using alias to a fixture
        cy.fixture("userDetails").as("user")
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/")
        
        // using CSS selector 
        cy.get("a[href$='contact']")
            .click()
            .then(function(itemText) {
                cy.log("Clicked the following text: " + itemText.text())
            })
        
        // using Xpath selector
        // cy.xpath("//a[contains(@href, 'contact')]").click()
        
        // using fixture data to input
        cy.get("@user").then((data) => {
            cy.get('#ContactUsFrm_first_name').type(data.firstName)
            cy.get('#ContactUsFrm_email').type(data.email)
        })
        
        // cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log("Test has completed!")
    })
})