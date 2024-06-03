import { Component, ReactNode } from 'react';

import { LastUpdated } from '@/components';

import MapAndSearch from './MapAndSearch';
import SectionTitle from './SectionTitle';

interface IComponentState {
  updateTime: string | null;
}

class MapSection extends Component<object, IComponentState> {
  constructor(props: object) {
    super(props);

    this.state = { updateTime: null };
  }

  handleMapCreation = (): void => {
    const currentDateTime = new Date();
    const updateTime = currentDateTime.toISOString().replace('.000Z', 'Z');
    this.setState({ updateTime });
  };

  render(): ReactNode {
    const { updateTime } = this.state;

    return (
      <section>
        <LastUpdated isLoading={!updateTime} lastUpdated={updateTime} />
        <SectionTitle />
        <MapAndSearch onMapCreation={this.handleMapCreation} />
      </section>
    );
  }
}

export default MapSection;
