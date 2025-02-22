import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    genericCombobox: ".oxd-select-text--arrow",
    secondItemCombobox: ".oxd-select-dropdown > :nth-child(6)",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }

  it.only('User Info Update - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    
    
    
    cy.get(selectorsList.firstNameField).clear().type('Bertrand')
    cy.get(selectorsList.lastNameField).clear().type('Russel')
    cy.get(selectorsList.genericField).eq(3).clear().type('47390') //Employe ID
    cy.get(selectorsList.genericField).eq(4).clear().type('9999999') //Other ID
    cy.get(selectorsList.genericField).eq(5).clear().type('88888') //Driver's License Number
    cy.get(selectorsList.genericField).eq(6).clear().type('2026-30-01') //License Expiry Date
    cy.get(selectorsList.genericField).eq(8).clear().type('444') //Custom Fields -> Test_field
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click({ force: true })

    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

    cy.get(selectorsList.genericCombobox).eq(0).click({ force: true })
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click({ force: true })
    cy.get(selectorsList.thirdItemCombobox).click()
   
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})