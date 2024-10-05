// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Menambahkan custom command untuk login via API

// cypress/support/commands.js

// cypress/e2e/jsonPlaceholder.spec.js


Cypress.Commands.add('loginByApi', (email, password) => {
  cy.request('POST', `${Cypress.env('apiUrl')}/api/login`, { 
    username: email,
    password,
  }).then((response) => {
    
    expect(response.status).to.eq(200)
 
    cy.setCookie('sessionId', response.body.token) 
    cy.setCookie('userId', response.body.id || 'defaultUserId') 
    cy.setCookie('userName', response.body.userName || 'defaultUserName') 

    cy.visit('/#!/main')
  })
})


  
  

  




