// komutlarin hemen gelmesi icin
///<reference types="cypress" />


describe('', () => {

    // https://www.npmjs.com/package/cypress-iframe adresinden 
    // Terminalden npm install -D cypress-iframe komutu ile kurulum yaptik
    // require('cypress-iframe') kodunu e2e.js dosyasına ekledik
    // Bu cy.frameLoaded ve cy.iframe komutlarini kullanmamizi sagliyor

    
    it('iframe Test', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr')
        // notification var onu kapattik
        cy.get('.tox-notification__dismiss').click() 
       // cy.screenshot()

    });
});