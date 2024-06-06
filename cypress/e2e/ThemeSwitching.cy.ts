import { Routes } from '@/constants/routes';

describe('Theme switching', () => {
  beforeEach(() => {
    cy.visit(Routes.BASIC);
  });

  it('Renders correctly', () => {
    cy.get('[data-testid="switch"]');

    cy.viewport(375, 650);
    cy.get('[data-testid="burger-menu-button"]').click();
    cy.get('[data-testid="switch"]');
  });

  it('Switching theme', () => {
    cy.get('[data-testid="switch"]').click();
    cy.get('body').should('have.css', 'background-color').and('equal', 'rgb(245, 245, 245)');
    cy.get('[data-testid="switch"]').find('span').should('have.css', 'right').and('equal', '2px');

    cy.get('[data-testid="switch"]').click();
    cy.get('body').should('have.css', 'background-color').and('equal', 'rgb(3, 3, 4)');
    cy.get('[data-testid="switch"]').find('span').should('have.css', 'left').and('equal', '2px');
  });
});
