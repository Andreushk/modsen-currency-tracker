interface IInputOptions {
  label: string;
  id: string;
}

const INPUTS_OPTIONS: IInputOptions[] = [
  {
    label: 'Open Price',
    id: 'open-price',
  },
  {
    label: 'Close Price',
    id: 'close-price',
  },
  {
    label: 'Highest Price',
    id: 'highest-price',
  },
  {
    label: 'Lowest Price',
    id: 'lowest-price',
  },
];

export default INPUTS_OPTIONS;
