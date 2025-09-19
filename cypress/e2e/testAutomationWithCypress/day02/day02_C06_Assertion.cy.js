describe('Assertions', () => {

     beforeEach(() => {
         cy.visit('/')
         cy.handleOptionalPopups() 

         cy.get('.account > .icon-only').click()
         cy.get('#account-nav > .flex-column > .primary').click()
         cy.get('#login-username').type('unicorn321')
         cy.get('#login-password').type('tester321.')
         cy.get('#login-form > .btn.primary').click()
    });     

     // ----------- ASSERTIONS ------------

     it('have.text yontemi ile assertion', () => {
        cy.handleOptionalPopups() 
         // 1. yontem : have.text
         cy.get('[menu-id="account-nav"] > .img-container > img').click()
         cy.get(':nth-child(7) > .btn').should('have.text','\n            \n        \n    Ayarlar')
         // webElementte 'Ayarlar' yazisi var mi
     });


     it('cy.url().should() yontemi ile assertion', () => {
        cy.handleOptionalPopups() 
         // 2. yontem : cy.url().should()
         cy.get('[menu-id="account-nav"] > .img-container > img').click()
         cy.get(':nth-child(7) > .btn').click()
         cy.url().should('include','ayarlar') 
         // adres 'ayarlar' kelimesi iceriyor mu
     });


     it('cy.title().should() yontemi ile assertion', () => {
        cy.handleOptionalPopups() 
         // 3. yontem : cy.title().should()
         cy.get('[menu-id="account-nav"] > .img-container > img').click()
         cy.get(':nth-child(7) > .btn').click()
         cy.title().should('equal','Hesap Ayarlarım') 
         // sayfa title'i istenilen degere  tam esit mi
     });


     it('be.visible yontemi ile assertion', () => {
         // 4. yontem : be.visible
         cy.get('[menu-id="account-nav"] > .img-container > img').click()
         cy.get(':nth-child(7) > .btn').click()
         
         cy.get('h2').should('be.visible')
         // sayfada 'Ayarlar' baslik webElementi gorunur mu
     });


    it('include.text yontemi ile assertion', () => {
         // 5. yontem : include.text
         cy.get('[menu-id="account-nav"] > .img-container > img').click()
         cy.get(':nth-child(7) > .btn').should('include.text','Ayar')
         // webElement Giriş yazisi iceriyor mu
    });
});