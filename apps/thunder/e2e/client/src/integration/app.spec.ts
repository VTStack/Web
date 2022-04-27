// import { getGreeting } from '../support/app.po';

describe('movie', () => {
  beforeEach(() => cy.visit('http://localhost:3000/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login();
    // Function helper example, see `../support/app.po.ts` file
    // getGreeting().contains('Welcome movie');
  });
});
