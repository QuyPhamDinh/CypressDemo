export {};

declare global {
    namespace Cypress{
        interface Chainable{
            login: (userName:string, password:string) => void
        }
    }
}

// Cypress.Commands.add('login', (userName, password) => {
//     cy.fixture('example').then((el)=>{

//         cy.get(el.usernameField).should('be.visible').type(userName)
//         cy.get(el.passwordField).should('be.visible').type(password)
//         cy.get(el.loginBtn).should('be.visible').click()
//     })
// })

// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
