context('Context kullanimi', () => {
    it('google ziyareti', () => {
        cy.visit('http://www.google.com')        
    });
    it('title', () => {
        cy.visit('http://www.google.com')  
        cy.title().should('include','Google')
        
    });
});