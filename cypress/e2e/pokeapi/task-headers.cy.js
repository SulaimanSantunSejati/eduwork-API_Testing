describe('Validate Headers', () => {
    it('Successfully Validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
    });
    it('Successfully Validate response body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').should((responseBody) => {
            expect(responseBody.name).to.equal('ditto')
            expect(responseBody.id).to.equal(132)
            expect(responseBody.base_experience).to.equal(101)
            expect(responseBody.game_indices[0].game_index).to.equal(76)  
            expect(responseBody.game_indices[4].game_index).to.equal(132) 
            expect(responseBody.abilities[0].ability.name).to.exist
        });
    });
});
