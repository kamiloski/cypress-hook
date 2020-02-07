
///<reference types = "Cypress"/>


describe('telala', () =>
{
beforeEach(() =>{
    cy.visit('https://www.google.pl/')
})
    it('step_1', () =>
    {
        cy.url().should('contain', 'google')
    })

})