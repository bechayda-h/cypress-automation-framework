/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(() => {
        cy.navigateTo_WebdriverUni_Checkbox_Page();
    })

    it("Check and validate checkbox", () => {
        // check and then validate that the checkbox is checked
        cy.get('@option-1').check()
        cy.get('@option-1').should("be.checked")
    });

    it("Uncheck and validate checkbox", () => {
        // uncheck and then validate that the checkbox is unchecked
        cy.get('@option-1').uncheck()
        cy.get('@option-1').should("not.be.checked")
    });

    it("Check multiple checkboxes", () => {
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    });
})