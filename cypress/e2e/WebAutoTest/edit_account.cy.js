import editAcc from '../../pageObject/edit.acc'
const userData = require('../../fixtures/user_data.json')

describe('Verify Edit Account Functionality', () => {
    beforeEach(() => {
      cy.visit('')
      cy.login(userData.validUser.email,userData.validUser.password)
      cy.contains('Welcome')
      cy.accountMenu()
    })
    it('Success Edit Account Infomation', () => {
      cy.editMenu()
      cy.get(editAcc.fname).clear().type(userData.newUser.firstName)
      cy.get(editAcc.lname).clear().type(userData.newUser.lastName)
      cy.saveBtn()
      cy.get(editAcc.succesMsg).should('be.visible')
    })
    it('Failed Edit Account Information - Empty Field', () => {
      cy.editMenu()
      cy.get(editAcc.fname).clear()
      cy.get(editAcc.lname).clear()
      cy.saveBtn()
      cy.get('#firstname-error').should('be.visible')
    })
  
    it('Failed Edit Email - Invalid Email', () => {
      cy.editMenu()
      cy.get('#change-email').click()
      cy.get(editAcc.newEmail).clear().type(userData.invalidUser.email)
      cy.get(editAcc.current).type(userData.validUser.password)
      cy.saveBtn()
      cy.get('#email-error').should('be.visible')
    })
    it('Failed Edit Email - Wrong Password', () => {
      cy.editEmail()
      cy.get(editAcc.newEmail).clear().type(userData.newUser.email)
      cy.get(editAcc.current).type(userData.invalidUser.password)
      cy.saveBtn()
      cy.get('.message-error').should('be.visible')
    })
    it('Failed Change Password - Wrong Current Password', () => {
      cy.changePass()
      cy.get(editAcc.current).type(userData.invalidUser.password)
      cy.get(editAcc.new).type(userData.newUser.password)
      cy.get(editAcc.confirm).type(userData.newUser.confirmPass)
      cy.saveBtn()
      cy.get('.message-error').should('be.visible')
    })
    it('Failed Change Password - Weak New Password', () => {
      cy.changePass()
      cy.get(editAcc.current).type(userData.validUser.password)
      cy.get(editAcc.new).type(userData.invalidUser.password)
      cy.get('#password-error').should('contain.text', 'Minimum length of this field must be equal or greater than 8 symbols')
    })
    it('Failed Change Password - Wrong Confirm New Password', () => {
      cy.changePass()
      cy.get(editAcc.current).type(userData.validUser.password)
      cy.get(editAcc.new).type(userData.newUser.password)
      cy.get(editAcc.confirm).type(userData.invalidUser.confirmPass)
      cy.saveBtn()
      cy.get('#password-confirmation-error').should('be.visible')
    })
    it('Success Edit Email and Change Password', () => {
      cy.editEmail()
      cy.get('#change-password').click()
      cy.get(editAcc.newEmail).clear().type(userData.newUser.email)
      cy.get(editAcc.current).type(userData.validUser.password)
      cy.get(editAcc.new).type(userData.newUser.password)
      cy.get(editAcc.confirm).type(userData.newUser.confirmPass)
      cy.saveBtn()
      cy.get(editAcc.succesMsg).should('be.visible')
    })
    
  })