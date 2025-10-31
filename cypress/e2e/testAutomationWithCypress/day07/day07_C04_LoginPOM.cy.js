// Doğru import yolu ile ayrılmış dosyaları çekiyoruz
import HomePage from '../../POM/HomePage.cy.js';
import LoginPage from '../../POM/LoginPage.cy.js';

describe('POM ile Login', () => {

    it('Login Testi', () => {
        const Homepage = new HomePage();
        const Loginpage = new LoginPage();

        // Test adımları temiz ve okunur
        Homepage.getVisit();
        Homepage.getLoginLink().click();
        Loginpage.getUserEmail().type('anunicornsdet@gmail.com');
        Loginpage.getPassword().type('unicorn321');
        Loginpage.getLoginButton().click();
        Loginpage.getAssert();


       // POM icinde olusturdugumuz page'lerde sadece locateleri return ettirebilecegimiz gibi type ve click islemlerini de yaptirabiliriz
        // yeniden kullanilabilirligini attirmasi acisindan bu komutlari test(it) icinde kullanmayi tercih ettik

    });

});