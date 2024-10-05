
describe('Create New User', () => {

    it('Successfully create new user', () => {  
        var user = {
            "name": "Sulaiman",
            "job": "QA Engineer"
        }
        
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body).have.property('name', 'Sulaiman')
            expect(response.body).have.property('job', 'QA Engineer')
        })
    });
});

