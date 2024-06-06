import { Routes } from '@/constants/routes';
import exchangeCurrency from '@/utils/helpers/exchangeCurrencies';
import roundExchangeRate from '@/utils/helpers/roundExchangeRate';

describe('Exchange modal', () => {
  beforeEach(() => {
    cy.visit(Routes.BASIC);
  });

  it('Renders exchange modal', () => {
    cy.get('h3').eq(2).click();
    cy.get('[data-testid="select"]').children().should('have.length', 10);
    cy.get('input').should('have.length', 2);
  });

  it('Exchange currencies correctly', () => {
    cy.intercept('GET', '**/latest**').as('rates');

    cy.get('h3').eq(2).click();

    cy.wait('@rates');

    cy.get('[data-testid="results"]')
      .invoke('text')
      .then((text: string) => {
        const exchangeRateString = text.split(':')[1];
        const exchangeRate = parseFloat(exchangeRateString);

        cy.get('input').eq(0).clear().type('10');
        cy.get('input')
          .eq(1)
          .should(
            'have.value',
            `${
              exchangeCurrency('100', roundExchangeRate(exchangeRate), exchangeRate, 'base')
                .secondary
            }`,
          );

        cy.get('[data-testid="select"]').select('JPY');
        cy.wait('@rates');

        cy.get('[data-testid="results"]')
          .invoke('text')
          .then((text: string) => {
            const exchangeRateString = text.split(':')[1];
            const exchangeRate = parseFloat(exchangeRateString);

            cy.get('input').eq(0).clear().type('10');
            cy.get('input')
              .eq(1)
              .should(
                'have.value',
                `${
                  exchangeCurrency('100', roundExchangeRate(exchangeRate), exchangeRate, 'base')
                    .secondary
                }`,
              );
          });
      });
  });
});
