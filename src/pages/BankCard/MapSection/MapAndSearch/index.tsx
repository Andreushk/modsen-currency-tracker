import { PureComponent, ReactNode } from 'react';

import { Search } from '@/components';
import { AppCurrencyCodesType } from '@/types/api/currencies';

import Map from './Map';

interface IComponentProps {
  onMapCreation: () => void;
}

interface IComponentState {
  currency: AppCurrencyCodesType | null;
}

class MapAndSearch extends PureComponent<IComponentProps, IComponentState> {
  constructor(props: IComponentProps) {
    super(props);

    this.state = { currency: null };
  }

  handleSearchResult = (result: AppCurrencyCodesType | null): void => {
    this.setState({ currency: result });
  };

  render(): ReactNode {
    const { currency } = this.state;
    return (
      <div>
        <Search onSelect={this.handleSearchResult} />
        <Map currencyCode={currency} onMapCreation={this.props.onMapCreation} />
      </div>
    );
  }
}

export default MapAndSearch;
