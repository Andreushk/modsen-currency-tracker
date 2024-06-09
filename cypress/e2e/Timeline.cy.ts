import { BASE_CURRENCY, currencies } from '@/constants/currencies';
import { Routes } from '@/constants/routes';
import getPreviousDates from '@/utils/helpers/getPreviousDates';

describe('Chart page', () => {
  beforeEach(() => {
    cy.visit(Routes.TIMELINE);
  });

  it('Open modal correctly', () => {
    cy.get('[data-testid="select"]').select(currencies[3]);
    cy.get('[data-testid="timeline-modal"]');
  });

  it('Setting currency values in form', () => {
    cy.get('[data-testid="select"]').select(currencies[3]);
    cy.get('[data-testid="chart-placeholder"]');

    const lastMonthDates: string[] = getPreviousDates(30);
    cy.contains('p', lastMonthDates[0]).should('be.visible');

    cy.contains('button', 'Next').click();
    cy.contains('p', lastMonthDates[0]).should('be.visible');

    lastMonthDates.forEach(() => {
      cy.get('input').each(($input) => {
        const randomNumber = Math.random() * 100;
        cy.wrap($input).clear().type(randomNumber.toFixed(2));
      });
      cy.contains('button', 'Next').click();
    });

    cy.get('[data-testid="chart"]');
    cy.get('[data-testid="toast"]');
  });

  it('Prev and Next buttons work correctly', () => {
    cy.get('[data-testid="select"]').select(currencies[3]);
    cy.get('[data-testid="chart-placeholder"]');

    const lastMonthDates: string[] = getPreviousDates();
    cy.contains('p', lastMonthDates[0]).should('be.visible');

    cy.contains('button', 'Prev').click();
    cy.contains('p', lastMonthDates[0]).should('be.visible');

    cy.get('input').each(($input) => {
      const randomNumber = Math.random() * 100;
      cy.wrap($input).clear().type(randomNumber.toFixed(2));
    });
    cy.contains('button', 'Next').click();

    cy.contains('p', lastMonthDates[1]).should('be.visible');
    cy.contains('button', 'Prev').click();
    cy.contains('p', lastMonthDates[0]).should('be.visible');
    cy.contains('button', 'Next').click();
    cy.contains('p', lastMonthDates[1]).should('be.visible');
  });

  it('Randomize values in form', () => {
    cy.get('[data-testid="select"]').select(currencies[3]);
    cy.get('[data-testid="chart-placeholder"]');

    cy.contains('button', 'Randomize').click();

    cy.get('[data-testid="chart"]');
    cy.get('[data-testid="toast"]');
  });

  it('Cancel button resets selected currency', () => {
    cy.get('[data-testid="select"]').select(currencies[3]);
    cy.get('[data-testid="chart-placeholder"]');

    cy.contains('button', 'Cancel').click();

    cy.get('[data-testid="select"]').should('have.value', BASE_CURRENCY);
  });
});
