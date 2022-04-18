/// <reference types="cypress" />

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
      
	// use @<your-alias> to use your alias 
	cy.get('@productThumbnail').its('length').should('be.gt', 5)
      
	// tip: check the text of the element using your browser's Inspect 
	cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
  });
  
  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('.thumbnail').as('productThumbnail')
    // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
    //     cy.log($el.text());
    // });
	
	// set non-sale items alias
    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
    
	// set sale items alias
	cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
    
	// non-sale items price total + sale items price total
    var itemsTotal = 0;
	
	// get total price of non-sale items
	cy.get('@itemPrice').then($linkText => {
        var itemsPriceTotal = 0;
		// split list of item prices into array using '$'
        var itemPrice = $linkText.split('$');
        var i;
        for(i = 0; i < itemPrice.length; i++) {
            cy.log(itemPrice[i])
            itemsPriceTotal += Number(itemPrice[i])
        }
        itemsTotal += itemsPriceTotal;
        cy.log("Non sale price items total: " + itemsPriceTotal)
    })
	
	// get total price of sale items and then validate the overall total price
    cy.get('@saleItemPrice').then($linkText => {
        var saleItemsPrice = 0;
        var saleItemPrice = $linkText.split('$');
        var i;
        for(i = 0; i < saleItemPrice.length; i++) {
            cy.log(saleItemPrice[i])
            saleItemsPrice += Number(saleItemPrice[i])
        }
        itemsTotal += saleItemsPrice;
        cy.log("Sale price items total: " + saleItemsPrice)
    })
    .then(() => {
        cy.log("The total price of all products: " + itemsTotal)
        // validate total price
		expect(itemsTotal).to.equal(572.45)
    })
  });
});
  