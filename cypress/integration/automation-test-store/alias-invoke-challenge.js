/// <reference types="cypress" />

describe("Alias and invoke", () => {
  it("Validate the thumbnail list", () => {
    cy.visit("https://automationteststore.com/")

    // using alias for list of elements
    cy.get('.thumbnail').as('thumbnailList')

    // assert list length
    cy.get('@thumbnailList').should('have.length', 16)
    
    // assert an element's title attribute within the list
    cy.get('@thumbnailList').find('.productcart').invoke('attr', 'title').should('contain','Add to Cart')
  })
})