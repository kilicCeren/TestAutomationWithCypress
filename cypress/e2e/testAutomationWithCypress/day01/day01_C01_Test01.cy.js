/*  sadece describle ile ve describedAndIt testi yptacağımız alan olan 
  mocha sayesinde gelen  hız kod bloklarını kullanılabilir.
describe('Temel Cypress Komutları', () => {
    
    
});
*/
describe('Temel Cypress Komutlari', () => {
    it('cy.visit komutu', () => {
        cy.visit('/')                     // base url tanımlı ise
        cy.visit('https://www.sinemalar.com') // base url tanımlı değilse        
              
    });

    it('cy.vist komutu.2', () => {
      cy.visit('/iletisim')             // Tanımlı olan base urlde path alanına iletisim doldurarak o sayfaya gider.  

    });

    it('cy.vist komutu.3', () => {
      cy.visit({
          url: "http://www.amazon.com", // base url tanımlı değilse   
          method: 'GET'
      })
      
    });
  

    it('cy.title komutu', () => { //skip komutu testin es geçilmesini sağlar
      cy.visit('/')                    // baseUrl adrese gider
      cy.title().then((actualTitle) => {
      cy.log('Sayfa başligi: ' + actualTitle)  // title'da ne döndüğünü görmek için
      })

      //cy.title().should('eq',"Türkiye'nin sinema sitesi  - Sinemalar.com") // title için tam eşitlik durumudur

      //Ancak to.equal() yerine include veya match kullanmak daha stabil sonuç verir, çünkü içerikler dinamik olabilir.
      
      cy.title().should('match', /Türkiye'nin sinema sitesi\s+-\s+Sinemalar\.com/) // match ile regex kullanmak (boşluk toleransı için)
      cy.title().should('include','Sinemalar') // verilen string içerme durumudur
      cy.title().should('contains','Türkiye')       
    });

    it('cy.url ve cy.location', () => { //only komutu ise  sadece o testin çalışmasına neden olur
      cy.visit('/')
      cy.visit('https://www.sinemalar.com/')
      cy.url('eq','https://www.sinemalar.com/')   // url'in tam eşitlik olduğunu doğrular
      cy.url().should('include','sinemalar')    // url içerisinde quarter geçiyor mu onu doğrular

      cy.visit('/iletisim')
      cy.location('pathname').should('eq','/iletisim')  //gidilen pathi doğrulamış oluyoruz
      cy.location('protocol').should('eq','https:')  //gidilen protokolü doğrular
      cy.location('hostname').should('eq','www.sinemalar.com')  //hostname i doğrular
      cy.location('pathname').should('include','iletisim')  //path alanındaki içeririse pathe'i doğrular
    });

  
});