
describe('Hover Over', () => {

    it('', () => {
        cy.visit('https://www.e-bebek.com/')
        
        //üzerine mouse geldiginden acılan menüyü acar 
        cy.get(':nth-child(1) > .header__megamenu-list').trigger('mouseover')

        //cy.wait(3000)  
        cy.contains('Mobilya').click()
        
    });

    it('', () => {
        cy.visit('https://www.e-bebek.com/')
        cy.wait(4000)
        cy.reload()  // sayfayı refresh 'ler
        cy.wait(4000)
        cy.reload(true) //sayfayı catchten degil direk sıfırdan acar
        
    });

});