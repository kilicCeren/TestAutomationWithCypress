describe('Create POST', () => {

    const bodyrequest={"name":"Ceren","salary":"35000","age":"28"}

    it('POST Request Test', () => {
        cy.request({
            url: 'https://dummy.restapiexample.com/api/v1/create',
            method: 'POST',
            body :bodyrequest
        }).then(response =>{
            expect(response.body.message).to.eq("Successfully! Record has been added.")
            expect(response.body.data.name).to.eq("Ceren")
            expect(response.body.data.salary).to.eq("35000")
            expect(response.body.data.age).to.eq("28")
            
        })
        
    });
});