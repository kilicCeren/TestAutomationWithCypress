///<reference types="cypress" />


describe('Custom Commands', () => {


    it('Pozitif Login Testi', () => {
        cy.visit('https://www.automationexercise.com/login')
        cy.get('[data-qa="login-email"]').type('anunicornsdet@gmail.com')
        cy.get('[data-qa="login-password"]').type('unicorn321')
        cy.get('[data-qa="login-button"]').click()
    });

    // istedigimiz islemleri coomand.js dosyasi altinda tanimlayip buradan komutu cagirarak gerceklestirebiliriz

    it('Komutla Pozitif Login Testi', () => {
        cy.automationexerciseLogin('anunicornsdet@gmail.com','unicorn321')
        // basarili girisi dogruladik
        cy.get(':nth-child(10) > a').should('contain','Logged') 
    });

    it('Komutla Negatif Login Testi', () => {
        cy.automationexerciseLogin('anunicornsdet@gmail.com','123')
        // giris yapilamadigini dogruladik
        cy.get('.login-form > form > p').should('be.visible') 


    });

});