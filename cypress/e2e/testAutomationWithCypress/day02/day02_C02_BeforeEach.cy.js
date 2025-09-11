describe.only('', () => {
beforeEach(() => { // beforeEach her bir it blogundan yani her bir testten once calisir
     cy.visit('/')
});
    it.only('title', () => {

        // bosluklar equal ile kontrollerde sorun cikarabildigi icin match ile test edebiliriz
        cy.title().should('match', /Türkiye'nin sinema sitesi\s+-\s+Sinemalar\.com/) 
        
        cy.title().should('include','Sinemalar')
    });
 
    it.only('url testi', () => {
        cy.url().should('include','sinemalar')
        
    });
});