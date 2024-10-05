describe('Validate Pokemon content', () => {
    
    it('should validate ability name and URL', () => {
        const response = {
            body: {
                abilities: [
                    {
                        ability: {
                            name: "limber",
                            url: "https://pokeapi.co/api/v2/ability/7/"
                        }
                    }
                ]
            }
        };
        expect(response.body.abilities[0]).to.have.property('ability');
        expect(response.body.abilities[0].ability.name).to.eq('limber');
        expect(response.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/');
    });

});
