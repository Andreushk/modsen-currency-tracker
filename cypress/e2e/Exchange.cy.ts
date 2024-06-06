import { Routes } from '@/constants/routes';
import exchangeCurrency from '@/utils/helpers/exchangeCurrencies';
import roundExchangeRate from '@/utils/helpers/roundExchangeRate';

describe('Exchange modal', () => {
  beforeEach(() => {
    cy.visit(Routes.BASIC);
    cy.intercept('https://api.currencyapi.com/v3/latest***', { fixture: 'latest.json' }).as('api');
  });

  it('Renders correctly', () => {
    cy.wait('@api');

    cy.get('h3').eq(2).click();
    cy.get('[data-testid="select"]').children().should('have.length', 10);
    cy.get('input').should('have.length', 2);
  });

  it('Renders, retrieves data and performs conversion', () => {
    cy.wait('@api');
    cy.get('h3').eq(2).click();

    cy.wait('@api');
    cy.get('[data-testid="results"]')
      .invoke('text')
      .then((text: string) => {
        const exchangeRate: number = parseFloat(text.split(':')[1]);
        const roundedRate = roundExchangeRate(exchangeRate);
        const exchangeResult = exchangeCurrency('100', roundedRate, exchangeRate, 'base').secondary;

        cy.get('input').eq(0).clear().type('10');
        cy.get('input').eq(1).should('have.value', exchangeResult);
      });

    cy.get('[data-testid="select"]').select('JPY');

    cy.wait('@api');
    cy.get('[data-testid="results"]')
      .invoke('text')
      .then((text: string) => {
        const exchangeRate = parseFloat(text.split(':')[1]);
        const roundedRate = roundExchangeRate(exchangeRate);
        const exchangeResult = exchangeCurrency('100', roundedRate, exchangeRate, 'base').secondary;

        cy.get('input').eq(0).clear().type('10');
        cy.get('input').eq(1).should('have.value', exchangeResult);
      });
  });

  it('Closes on clicking on the overlay', () => {
    cy.wait('@api');

    cy.get('h3').eq(2).click();
    cy.get('[data-testid="overlay"]').click('topRight');
    cy.get('[data-testid="overlay"]').should('not.exist');
  });
});
