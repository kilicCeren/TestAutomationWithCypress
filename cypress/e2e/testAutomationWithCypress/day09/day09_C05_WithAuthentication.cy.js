describe('Test with Authentication', () => {

    /*
  {
  "firstname": "Karolann",
  "lastname": "Pfeffer",
  "totalprice": 256,
  "depositpaid": false,
  "bookingdates": {
    "checkin": "2025-11-24",
    "checkout": "2025-12-06"
  },
  "additionalneeds": "Breakfast"
}
    */

    it('Test01 - GET', () => {
        cy.request({
            url: 'https://restful-booker.herokuapp.com/booking/429',
            method: 'GET',
            auth: {
                "username" : "admin",
                "password" : "password123"
            },
            token: 'abc123'
        }).then(response => {
            expect(response.body.lastname).to.equal("Pfeffer")
        })
    });

    it('Test02 - POST and Assert', () => {
        cy.request({
            url: 'https://restful-booker.herokuapp.com/booking',
            method: 'POST',
            auth: {
                "username" : "admin",
                "password" : "password123"
            },
            token: 'abc123',
            body: {
                "firstname": "Amelie",
                "lastname": "Poulain",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                  "checkin": "2026-01-01",
                  "checkout": "2026-01-10"
                },
                "additionalneeds": "Breakfast"
              }
        }).then(response => {
            expect(response.body.booking.firstname).to.equal("Amelie")
            expect(response.body.booking.lastname).to.equal("Poulain")
            expect(response.body.booking.bookingdates.checkin).to.equal("2026-01-01")
            expect(response.body.booking.depositpaid).to.equal(true)
        })
    });
});