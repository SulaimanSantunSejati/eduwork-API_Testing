describe('Get User List', () => {
    
    it('Verify the list users will be displayed', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2&per_pages=1&delay=3'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });
});

describe('Get User List without params', () => {
    it('Verify the users list will displayed', () => {
        cy.request({
            methode: 'GET',
            url: 'https://reqres.in/api/users'
        }).as('id')
        cy.get('@id').its('status').should('equal', 200)
    });
});