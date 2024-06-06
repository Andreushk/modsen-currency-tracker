export enum Routes {
  BASIC = '/',
  TIMELINE = '/timeline',
  BANK_CARD = '/bank-card',
  CONTACTS = '/contacts',
  MARKET = '/market',
  SERVICE = '/service',
  SPARKS = '/sparks',
  SNAPS = '/snaps',
  IDEAS = '/ideas',
  STREAMS = '/streams',
  NOT_FOUND = '*',
}

export type RoutesType = `${Routes}`;
