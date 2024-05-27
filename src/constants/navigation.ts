import { Routes, RoutesType } from './routes';

interface INavigationOption {
  displayValue: string;
  pathValue: RoutesType;
}

const NAVIGATION_OPTIONS: INavigationOption[] = [
  { displayValue: 'Home', pathValue: Routes.BASIC },
  { displayValue: 'Timeline', pathValue: Routes.TIMELINE },
  { displayValue: 'Bank card', pathValue: Routes.BANK_CARD },
  { displayValue: 'Contact', pathValue: Routes.CONTACTS },
];

export default NAVIGATION_OPTIONS;
