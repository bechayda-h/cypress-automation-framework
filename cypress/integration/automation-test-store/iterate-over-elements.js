/// <reference types="cypress" />

describe("Iterate over elements", () => {
  // challenge task lesson 172
  beforeEach(() =>{
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  })

  it("Log information of all hair care products", () => {
	  // using .each($el, index, $list)
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        cy.log("Index: " + index + " : " + $el.text())
    });
  });
  
  it("Add specific product to basket", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if($el.text().includes('Curls to straight Shampoo')) {
        // using .wrap()
			  cy.wrap($el).click()
      }
    });
  });

  it("Add specific product to basket", () => {
    // using custom commands
    // selectProduct defined in command.js
    cy.selectProduct('Curls to straight Shampoo');
  });

  it("Add another specific product to basket", () => {
    cy.selectProduct('Seaweed Conditioner');
  });

  // challenge task lesson 172
  it.only("Add another specific product to basket", () => {
    cy.selectProduct('Eau Parfumee au The Vert Shampoo');
  });
});
