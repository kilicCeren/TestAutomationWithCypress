/*
Potizif Test:
http://automationexercise.com sayfasina gider
Sigun/Login sayfasina gider
"Login  to your account" yazisinin bulundugunu dogrular
"New User Signup!" yazsininin varligini dogrular
        // anunicornsdet@gmail.com
        // unicorn321
gecerli email ve password ile giris yapar
giris yapildigini dogrular
cikis yapar
cikis yapildigini dogrular
*/

describe('Login Testi', () => {
    it('Pozitif Login Testi', () => {

        //NOT: 
        // cy.viewport(1500,1200) // sayfa boyutlarını ayarlamak gerekirse cy.viewport() komutuyla istedigimiz boyuta getirebiliriz
        // cy.viewport(macbook-16) // ya da ekran boyutlarini hazir cihaz boyutlariyla da verebiliriz
        // viewport olculerini config dosyasinda da tanimlayabiliriz
        // HD Plus ekran olculeri
        // viewportWidth:1366,
        //viewportHeight:768,

    

        cy.visit('http://automationexercise.com')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        // cy.log(); komutuyla istedigimiz log mesajlarini yazdirabiliriz       
        cy.log('Login to your account yazisi kontrol ediliyor'); 
        cy.get('.login-form > h2').should('be.visible')

        // tercih edilebilecek bir diger assert yontemi
        cy.get('.login-form > h2').should('have.text','Login to your account') 

        //LoginForm Doldurma
        cy.get('[data-qa="login-email"]').type('anunicornsdet@gmail.com')
        cy.get('[data-qa="login-password"]').type('unicorn321')
        cy.get('[data-qa="login-button"]').click()

        // logged yazisinin gorunurlugunu assert ettik
        cy.get(':nth-child(10) > a').should('contain','Logged') 

        // logout butonuna tikladik
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        //login yazisinin yeniden gorunur oldugunu kontrol ederek logout yaptigimizi dogruladik
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('have.text',' Signup / Login')        
    });
});

