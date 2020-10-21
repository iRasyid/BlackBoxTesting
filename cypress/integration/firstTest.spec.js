/// <reference types="cypress" />

describe("BlackBoxTesting", () => {
    it('Visit Link', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    })
    it('Inline form', () => {
        cy.get('[placeholder="Jane Doe"][type="text"]').type('Abdurrasyid Muhasibi')
        cy.get('[placeholder="Email"][type="text"]').type('syid7.id@gmail.com')
        cy.contains('Remember me').click()
    })  
    it('Using the Grid', () => {
        cy.get('#inputEmail1').type('abc@gmail.com')
        cy.get('#inputPassword2').type('12345678')
        cy.contains('Option 1').click()
        cy.contains('Option 2').click()
        cy.contains('Disabled Option').click()
    })
    it('Basic form', () => {
        cy.get('#exampleInputEmail1').type('abc@gmail.com')
        cy.get('#exampleInputPassword1').type('12345678')
        cy.contains('Check me out').click()
    })
    it('Form without labels', () => {
        cy.get('[placeholder=Recipients][type=text]').type('Rasyid')
        cy.get('[placeholder=Subject][type=text]').type('Hello World')
        cy.get('textarea,[placeholder="Message"]').type('BlackBox Testing')
    })
    it('Block form', () => {
        cy.get('#inputFirstName').type('Abdurrasyid')
        cy.get('#inputLastName').type('Muhasibi')
        cy.get('#inputEmail').type('syid7.id@gmail.com')
        cy.get('#inputWebsite').type('google.com')
    })
    it('Horizontal form', () => {
        cy.get('#inputEmail3').type('abc@gmail.com')
        cy.get('#inputPassword3').type('12345678')
        cy.get('.custom-checkbox').last().click()
    })
})