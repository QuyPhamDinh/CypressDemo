import {LoginPage} from './pageObjects/LoginPage';

describe('empty spec', () => {
    const loginPage = new LoginPage();
    it('login sauce lab demo with standard user', () => {
        cy.fixture('example').then((el)=>{
            loginPage.login(el.standard, el.password)
            cy.url().should('include','inventory.html')
          })
    })
  
    it('login sauce lab demo with standard user - wrong pass', () => {
      cy.fixture('example').then((el)=>{
        loginPage.login(el.standard,'wrongpass')
        cy.url().should('include','inventory.html')
      })
    })
  })