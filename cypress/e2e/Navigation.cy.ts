import { Routes } from '@/constants/routes';

describe('Navigation module', () => {
  beforeEach(() => {
    cy.visit(Routes.BASIC);
  });

  it('Renders with all navigation links', () => {
    cy.get('[data-testid="home-page"]');

    cy.get(`a[href="${Routes.BASIC}"]`).invoke('text').should('have.length.gt', 0);
    cy.get(`a[href="${Routes.TIMELINE}"]`).invoke('text').should('have.length.gt', 0);
    cy.get(`a[href="${Routes.BANK_CARD}"]`).invoke('text').should('have.length.gt', 0);
    cy.get(`a[href="${Routes.CONTACTS}"]`).invoke('text').should('have.length.gt', 0);
  });

  it('Navigates to the Timeline page', () => {
    cy.get(`a[href="${Routes.TIMELINE}"]`).click();
    cy.get('[data-testid="timeline-page"]');
  });

  it('Navigates to the Bank card page', () => {
    cy.get(`a[href="${Routes.BANK_CARD}"]`).click();
    cy.get('[data-testid="bank-card-page"]');
  });

  it('Navigates to the Contacts page', () => {
    cy.get(`a[href="${Routes.CONTACTS}"]`).click();
    cy.get('[data-testid="contacts-page"]');
  });

  it('Renders on small screens', () => {
    cy.viewport(375, 650);
    cy.get('[data-testid="burger-menu-button"]').click();

    cy.get(`a[href="${Routes.BASIC}"]`).invoke('text').should('have.length.gt', 0);
    cy.get(`a[href="${Routes.TIMELINE}"]`).invoke('text').should('have.length.gt', 0);
    cy.get(`a[href="${Routes.BANK_CARD}"]`).invoke('text').should('have.length.gt', 0);
    cy.get(`a[href="${Routes.CONTACTS}"]`).invoke('text').should('have.length.gt', 0);
  });
});
