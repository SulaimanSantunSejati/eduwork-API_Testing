describe('Delete User', () => {
    it('Successfully deleted user', () => {
        cy.request('DELETE','https://reqres.in/api/users?page=2').then((response) =>{
            expect(response.status).equal(204)
        })
    });
});