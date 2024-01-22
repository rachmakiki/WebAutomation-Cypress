Cypress.Commands.add('create', () => {
    cy.contains('Create an Account').click();  
    cy.get('.base').should('contain.text', 'Create New Customer Account')
})

Cypress.Commands.add('createBtn', () => {
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
})

Cypress.Commands.add('login', (email, password) => {
    cy.contains('Sign In').click();  
    cy.get('#email').type(email)
    cy.get('#pass').type(password)
    cy.get('#send2').click();
})

Cypress.Commands.add('accountMenu', () => {
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
    cy.get('.base').should('contain.text','My Account')
})

Cypress.Commands.add('editMenu', () => {
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get('.base').should('contain.text', 'Edit Account')
})

Cypress.Commands.add('editEmail', () => {
    cy.editMenu()
    cy.get('#change-email').click()
})

Cypress.Commands.add('changePass', () => {
    cy.get('.change-password').click()
    cy.get('.base').should('contain.text', 'Edit Account')
})

Cypress.Commands.add('saveBtn', () => {
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
})

Cypress.Commands.add('manageAddress', () => {
    cy.get('.block-title > .action > span').click()
})

Cypress.Commands.add('defaultbill', () => {
    cy.get('#primary_billing').click()
})

Cypress.Commands.add('defaultship', () => {
    cy.get('#primary_shipping').click()
})