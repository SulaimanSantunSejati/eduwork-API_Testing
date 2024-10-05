describe('Login via API', () => {
    it('should log in and set the token in cookies', () => {

      cy.loginByApi('eve.holt@reqres.in', 'cityslicka')
  
      cy.getCookie('sessionId').should('exist') 
      cy.getCookie('userId').should('exist')   
      cy.getCookie('userName').should('exist') 
  
     
    })
    it('should log in and redirect to the main page', () => {

      cy.loginByApi('eve.holt@reqres.in', 'cityslicka');
  
      cy.url().should('include', '/#!/main')
    });
  })
