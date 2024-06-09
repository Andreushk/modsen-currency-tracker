# modsen-currency-tracker

# About

Modsen Currency Tracker is an application where you can find the current exchange rates of currencies (and cryptocurrencies). Also you are able to see a graph of changes in their values during a last month, as well as find the nearest banks with the currencies of interest.

# Stack

Application technologies list:

- React
- TypeScript
- Redux Toolkit
- Axios
- ChartJS
- MapboxJS
- React Router DOM
- Styled Components
- Webpack
- Jest
- Cypress

...also the following technologies are configured for the development process:

- Eslint
- Prettier
- Babel
- Husky

# APIs

The application requires interaction with [Currency Conversion API](https://currencyapi.com/) (to get currency exchange rates).

# Main Functionality:

- Convenient viewing of currency values and possibility to convert them;
- Chart of currency value changes during the last month;
- Two themes: light and dark;
- Map to find and display location of nearest banks;
- Search with hints to filter banks on the map;
- A loading skeleton to display a beautiful UI while data is loading;
- Using the Observer pattern to display notifications;
- The application will never break completely - ErrorBoundaries are used with error UI;
- Adaptive layout for small screens.

# App Pages Description

## Home Page

This page contains a welcome block with a grid where currency cards are displayed. Currency cards include an icon, name and exchange rating of the currency. Clicking on a currency card opens a special modal window where the user can select currencies and convert them.

## Timeline Page

On this page a user can view the chart of currency value changes for a previous month. The chart is made with "candlesticks" markers - they allow to view detailed information about a opening and closing prices for a day, as well as the highest and lowest values.

## Bank Card Page

On this page there is an interactive map showing banks nearest to a user (permission to use data about user location was given) or banks in Minsk. Also on this page there is a search bar with hints, which helps to filter banks by currencies.

## Contacts Page

Contact information is located on this page. All information links are clickable - click on the address to go to Google Maps, click on the number to call, and click on the email address to write an e-mail.

# Deploy

The app works here: [>Visit deployment<](https://modsen-currency-tracker-two.vercel.app/)
