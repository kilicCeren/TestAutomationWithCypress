// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// Herhangi bir Poopup,Cookie vb bir elementi kapatmak istersek  bir functionun içine alıyoruz bunu
// helper  fonksiyonu olarak kullanabiliriz.
//bu fonksiyon  element var mı kontrol  eder, bulursa tıklar.
//elementi bulamazsa yoluna devam eder 

// <reference types="cypress" />

// Yüklendiğini anlamak için log
console.log('[commands.js] loaded')

Cypress.Commands.add('handleOptionalPopups', () => {
  const selectors = [
    '.flex-wrap > .flex-row > .btn.primary',   // Çerez kabul et
    '#announcement-modal .icon-only',          // Reklam kapatma
    '.newsletter-popup .close-btn',             // Newsletter kapatma
    '#announcement-modal > .modal-wrapper > .dialog > .btn'

  ]

  selectors.forEach((selector) => {
    // DOM hazır mı ve element var mı kontrol et
    cy.document().then((doc) => {
      const el = doc.querySelector(selector)
      if (el) {
        cy.wrap(el).click({ force: true })
      }
    })
  })
})