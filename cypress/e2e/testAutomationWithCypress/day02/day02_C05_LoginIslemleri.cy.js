describe('Login Islemleri', () => {
    
    it('Sinemalar.com Log in Islemleri', () => {
        cy.visit('/')
        cy.handleOptionalPopups()         
    
        //hesap butonuna tıklar
        cy.get('#account-btn').click()

        //giris yap butonuna tıklar

        // 1. yontem : klasik yontemle locate alip click yapabiliriz
        cy.get('#account-nav > .flex-column > .primary').click() 

        // 2. yontem : icerigi 'Giriş Yap' olan yazısını elemente bulup click yap diyebiliriz       
        //cy.contains('Giriş Yap').click()  

        // 3. yontem : büyük küçük ayrımına dikkat etme case sensitive olmamasi icin {matchCase:false} kullanabiliriz
        //cy.contains('giriş yap',{matchCase:false}).click() 


        //kullanici adini gir
        cy.get('#login-username').type('unicorn321')
        // sifre gir
        cy.get('#login-password').type('tester321.')

         // login butonunun locateine click yapabiliriz
        cy.get('#login-form > .btn.primary').click()

        // ya da sifreyi girip entera basabiliriz
        // cy.get('#login-password').type('tester321.{enter}') 

    });
    

    
});