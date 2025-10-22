describe('Login Testi', () => {
    
    it('Login Testi', () => {
        cy.visit('http://automationexercise.com')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()        
        cy.get('[data-qa="login-email"]').type('anunicornsdet@gmail.com')
        cy.get('[data-qa="login-password"]').type('unicorn321')
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('contain','Logged')

    });
});