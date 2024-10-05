describe('Validate Content', () => {
    it('Successfully Validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', {name:'bulbasaur'})
    });

});