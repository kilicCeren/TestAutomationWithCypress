describe('Write Files', () => {

    it('Write Files', () => {
        cy.writeFile('cypress/fixtures/ornek.txt', {
            username: 'anunicornsdet@gmail.com',
            password: 'unicorn321'
          })
          

    });




});