import { INavigationBlockOptions } from './Block';

const NAVIGATION_OPTIONS: INavigationBlockOptions[] = [
  {
    displayValue: 'General',
    links: [
      { displayValue: 'Market', pathValue: '/market' },
      { displayValue: 'Service', pathValue: '/service' },
    ],
  },
  {
    displayValue: 'Product',
    links: [
      { displayValue: 'Sparks', pathValue: '/sparks' },
      { displayValue: 'Snaps', pathValue: '/snaps' },
    ],
  },
  {
    displayValue: 'Community',
    links: [
      { displayValue: 'Ides', pathValue: '/ideas' },
      { displayValue: 'Streams', pathValue: '/streams' },
    ],
  },
];

export default NAVIGATION_OPTIONS;
