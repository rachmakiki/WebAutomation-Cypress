const userData = require('../../fixtures/user_data.json')

describe('Verify Login Functionality', () => {
  
  beforeEach(() => {
    cy.visit('')
  })
  
  it('Success Login', () => {
    cy.login(userData.validUser.email, userData.validUser.password)
    cy.contains('Welcome')
  })
  it('Failed - Email not Registered', () => {
    cy.login(userData.not_register_email, userData.validUser.password)
    cy.get('.message-error > div').should('be.visible')
  })
  it('Failed - Wrong Password', () => {
    cy.login(userData.validUser.email, userData.invalidUser.password)
    cy.get('.message-error > div').should('be.visible')
  })
  it('Failed - Invalid Email', () => {
    cy.login(userData.invalidUser.email, userData.validUser.password)
    cy.get('#email-error').should('be.visible')
  })
})