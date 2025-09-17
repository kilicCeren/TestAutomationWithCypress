describe('Sinemalar.com Searching', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.handleOptionalPopups() 
    });

    
    it('Sinemalarda 3 Idiots', () => {
        cy.get('#header-search').click()
        cy.get('#header-search').type('3 Idiots{enter}')
        cy.get('.card-title').click()
      
    });

    it('Sinemalarda Amelie', () => {
        cy.get('#header-search').click()
        cy.get('#header-search').type('Amelie {enter}')
        cy.get('#movies > :nth-child(1) > .column > .card-title').click()
        
      
    });
});