const { validUser } = require('../../fixtures/user_data.json')
const { validAddress } = require('../../fixtures/user_data.json')
const { invalidAddress } = require('../../fixtures/user_data.json')
import editAdd from '../../pageObject/edit.add'

describe('Verify Edit Address Functionality', () => {
    beforeEach(() => {
      cy.visit('')
      cy.login(validUser.email, validUser.password)
      cy.contains('Welcome')
      cy.accountMenu()
    })
    it('Success Edit Address', () => {
        cy.manageAddress()
        cy.get(editAdd.chngBilling).click()
        cy.get(editAdd.phone).clear().type(validUser.phone)
        cy.get(editAdd.street).clear().type(validAddress.street)
        cy.get(editAdd.city).clear().type(validAddress.city)
        cy.get(editAdd.country).select(validAddress.country)
        cy.get(editAdd.region).clear().type(validAddress.province)
        cy.get(editAdd.zip).clear().type(validAddress.zip)
        cy.get(editAdd.saveBtn).click()
        cy.get(editAdd.successMsg).should('be.visible')
    })
    it('Failed - Required Field Empty', () => {
      cy.manageAddress()
      cy.get(editAdd.chngBilling).click()
      cy.get(editAdd.phone).clear()
      cy.get(editAdd.street).clear()
      cy.get(editAdd.city).clear()
      cy.get(editAdd.region).clear()
      cy.get(editAdd.zip).clear()
      cy.get(editAdd.saveBtn).click()
      cy.get(editAdd.errorMsg_phone).should('be.visible')
      cy.get(editAdd.errorMsg_street).should('be.visible')
      cy.get(editAdd.errorMsg_city).should('be.visible')
  })
  it('Failed - Invalid Zip / Postal Code ', () => {
    cy.manageAddress()
    cy.get(editAdd.chngBilling).click()
    cy.get(editAdd.phone).clear().type(validUser.phone)
    cy.get(editAdd.street).clear().type(validAddress.street)
    cy.get(editAdd.city).clear().type(validAddress.city)
    cy.get(editAdd.country).select(validAddress.country)
    cy.get(editAdd.region).clear().type(validAddress.province)
    cy.get(editAdd.zip).clear().type(invalidAddress.zip)
    cy.get(editAdd.errorMsg_zip).should('be.visible')
})
})