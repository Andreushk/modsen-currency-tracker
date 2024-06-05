import { ADDRESS, EMAIL, PHONE } from '@/constants/contacts';

interface IContactItemOptions {
  title: string;
  value: string;
  link: string;
  isBlank: boolean;
}

const CONTACTS: IContactItemOptions[] = [
  {
    title: 'Location',
    value: ADDRESS,
    link: 'https://maps.app.goo.gl/ewYPWMwxaTLd9dqU6',
    isBlank: true,
  },
  {
    title: 'Phone us',
    value: PHONE,
    link: `tel:${PHONE}`,
    isBlank: false,
  },
  {
    title: 'Mail us',
    value: EMAIL,
    link: `mailto:${EMAIL}`,
    isBlank: false,
  },
];

export default CONTACTS;
