# Orange HRM Cypress Test Suite

## Overview
This project contains automated tests for the Orange HRM system using Cypress. The tests cover essential functionalities such as user login and updating user information.

## Project Structure
The test suite follows a structured approach:

- `login.spec.cy.js` - Tests for the login functionality, including both success and failure scenarios.
- `user.spec.cy.js` - Tests for updating user information within the Orange HRM system.
- `fixtures/` - Stores test data such as user credentials.
- `pages/` - Implements page object models for different parts of the Orange HRM system (e.g., `LoginPage`, `DashboardPage`, `MenuPage`, `MyInfoPage`).

## Prerequisites
Ensure you have the following installed before running the test suite:
- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)

## Installation
Clone the repository and install dependencies:
```sh
npm install
```

## Running the Tests
Run Cypress tests using the following command:
```sh
npx cypress open
```
This will open the Cypress Test Runner, where you can manually execute the tests.

Alternatively, run tests in headless mode:
```sh
npx cypress run
```

## Test Cases
### Login Tests (`login.spec.cy.js`)
- **Login - Fail:** Attempts login with invalid credentials and verifies the failure message.
- **Login - Success:** Logs in with valid credentials and verifies access to the dashboard.

### User Tests (`user.spec.cy.js`)
- **User Info Update - Success:** Logs in with a valid user, navigates to the "My Info" section, and updates personal and employee details.

## Technologies Used
- [Cypress](https://www.cypress.io/) - End-to-end testing framework.
- [Chance.js](https://chancejs.com/) - Used for generating random test data.
- JavaScript (ES6)

## Contribution
Feel free to submit pull requests or report issues.

## License
This project is licensed under the MIT License.

