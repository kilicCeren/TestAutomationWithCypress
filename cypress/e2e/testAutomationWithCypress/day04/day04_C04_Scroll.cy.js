describe('Scroll Islemleri', () => {


    it('Scroll ile sayfayi belirli bir yere kadar kaydirma', () => {
        cy.visit('/')
        cy.handleOptionalPopups()         // Eger gelirse acilan  pop up frame'leri kapatıyoruz

        // Haberler basligina kadar kaydirdik
        cy.get(':nth-child(13) > .section-title > .link > h2 > span').scrollIntoView({duration:8000}) 
        
        // Gunun filmleri basligina kadar kaydirdik. Burada oncesine bekleme suresi vermis olduk
        cy.get(':nth-child(8) > .border-box > .discover-title > h2').scrollIntoView({duration:8000}) 
         
        // Not: Scroll islemini gorebilmek ici durationu 8000 yani 8 sn yaptım normal testler icin 1000 1 sn kafi gereksiz beklemelere gerek yok 
    });

    it('Scroll ile belirli bir koordinata kadar kaydirma', () => {
        cy.visit('/')
        cy.handleOptionalPopups()         // Eger gelirse acilan  pop up frame'leri kapatıyoruz

        cy.scrollTo(0,1900,{duration:8000}) // istedigimiz koordinata kadar asagi kaydirdik

        cy.scrollTo(0,-1900,{duration:8000}) // ayni olcude geri cikardik

    });

    it('Koordinat ile gitme', () => {
        cy.visit('/') 
        cy.handleOptionalPopups()         // Eger gelirse acilan  pop up frame'leri kapatıyoruz
        
        cy.get(':nth-child(13) > .section-title > .link > h2 > span').scrollIntoView({duration:8000})         


        cy.get(':nth-child(13) > .section-title > .link > h2 > span').scrollIntoView({offset: { top: 200, left: 0 } }) 

    });
  
});