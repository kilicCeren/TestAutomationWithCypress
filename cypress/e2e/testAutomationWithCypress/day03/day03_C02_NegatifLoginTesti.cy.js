/*
Negatif Test:
http://automationexercise.com sayfasina gider
Sigun/Login sayfasina gider
        // anunicornsdet@gmail.com
        // 321
gecersiz email ve password ile giris yapar
giris yapilamadigini dogrular
*/

describe('Login Testi', () => {

    it('Negatif Login Testi', () => {
        cy.visit('http://automationexercise.com')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        //LoginFormDoldurma
        cy.get('[data-qa="login-email"]').type('anunicornsdet@gmail.com')
        cy.get('[data-qa="login-password"]').type('321')
        cy.get('[data-qa="login-button"]').click()

        // Your email or password is incorrect! yazisinin gorunurlugunu test ederek giris yapilamadigin dogruladik
        cy.get('.login-form > form > p').should('be.visible') 
        cy.log('Test Başarıyla Tamamlandı')
    });

});