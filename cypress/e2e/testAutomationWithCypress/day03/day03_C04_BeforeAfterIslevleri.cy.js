describe('Before ve After Islevleri', () => {

    before(() => { // Tüm testlerden once bir kere calisir
        cy.visit('/')
        cy.handleOptionalPopups() 

        
    });

    
    after(() => { // // Tüm testlerden sonra bir kere calisir (Testlerin tamami tamamlandiktan sonra)
        cy.log('Tüm testler tamamlandı')
    });


    beforeEach(() => { // Her bir testten  (it bloğundan) once bir kere calisir
        cy.log('Yeni bir test başlıyor') 
        cy.visit('/')         
        cy.handleOptionalPopups() 

              
    });

  
    it('Sinemalar.com da 3 Idiot filmi', () => {
        cy.get('#header-search').type('3 Idiots{enter}')
    });

     it('Sinemalar.com da Amelie filmi', () => {
        cy.get('#header-search').type('Amelie{enter}')
    });

    
    afterEach(() => { // Her bir testten (it bloğundan) sonra bir kere calisir
        cy.log('Bir test tamamlandı. Sonraki teste geçiliyor')
    });
    
});