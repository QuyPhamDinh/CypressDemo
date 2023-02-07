///  <reference path="../support/commands.ts"/> 
// the line above support autocomplete and definition navigation in code

describe('empty spec', () => {
  it('login sauce lab demo with standard user', () => {
    cy.fixture('example').then((el)=>{
      cy.login(el.standard, el.password)
      cy.url().should('include','inventory.html')
    })
  })

  it('login sauce lab demo with standard user - wrong pass', () => {
    cy.fixture('example').then((el)=>{
      cy.login(el.standard,'wrongpass')
      cy.url().should('include','inventory.html')
    })
  })
})