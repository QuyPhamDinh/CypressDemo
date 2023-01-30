Cypress.Commands.add('login', (userName, password) => {
    cy.fixture('example').then((el)=>{

        cy.get(el.usernameField).should('be.visible').type(userName)
        cy.get(el.passwordField).should('be.visible').type(password)
        cy.get(el.loginBtn).should('be.visible').click()
    })
})