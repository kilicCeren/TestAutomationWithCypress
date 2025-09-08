const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth:1366,
    viewportHeight:768,
    // HD Plus ekran olculeri


    //Her bir elementi bulmak için 12 saniye bekleme süresi
    defaultCommandTimeout: 12000,

    // Gereksiz hafiza kullaniminin onune gecmek icin false 
    video: false,
    //Eklenmesi zorunlu degil Cypress zaten screenshot aliyor.
    screenshotOnRunFailure: true, 
    
    //fail olan testlerin 2 kere daha calistirilmasini saglar
    retries:2,  

    baseUrl:"https://www.sinemalar.com",
    supportFile: 'cypress/support/e2e.js',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
