describe('Write Files', () => {

    it('Write Files', () => {
        cy.writeFile('cypress/fixtures/ornek.json', {
            username: 'anunicornsdet@gmail.com',
            password: 'unicorn321'
          })
          

          // cy.writeFile() komutu icinde dosya turunu .json degil .txt verirsek ayni sekilde bir txt dosyasi da olusturabiliriz
    });




});