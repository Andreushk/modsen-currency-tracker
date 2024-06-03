import mapboxgl from 'mapbox-gl';
import { createRef, PureComponent, ReactNode } from 'react';

import getBanksInformation from '@/api/banks/getBanksInformation';
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '@/constants/geolocotaion';
import { IBankData } from '@/types/api/banks';
import { AppCurrencyCodesType } from '@/types/api/currencies';

import { StyledContainer, StyledMapContainer } from './styled';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY || '';

interface IComponentProps {
  currencyCode: AppCurrencyCodesType | null;
  onMapCreation: () => void;
}

interface IComponentState {
  lng: number;
  lat: number;
  zoom: number;
}

class Map extends PureComponent<IComponentProps, IComponentState> {
  mapContainer: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>();

  map: mapboxgl.Map | null | undefined;

  markers: mapboxgl.Marker[] = [];

  banks: IBankData[];

  debouncedHandleMapMove: () => void;

  debounceTimerId: ReturnType<typeof setTimeout> | null = null;

  constructor(props: IComponentProps) {
    super(props);
    this.state = {
      lng: DEFAULT_LONGITUDE,
      lat: DEFAULT_LATITUDE,
      zoom: 11,
    };

    this.banks = [];
    this.handleMapMove = this.handleMapMove.bind(this);
    this.debouncedHandleMapMove = this.debounce(this.handleMapMove, 5000);
  }

  componentDidMount(): void {
    if (this.mapContainer.current) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getUserGeolocation);
      }

      const { lng, lat, zoom } = this.state;
      this.map = new mapboxgl.Map({
        container: this.mapContainer.current,
        attributionControl: false,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom,
      });

      this.map.on('move', this.debouncedHandleMapMove);
      this.props.onMapCreation();
      this.getBanksInformationForMap(lng, lat);
    }
  }

  componentDidUpdate(prevProps: Readonly<IComponentProps>): void {
    const { currencyCode: actualCode } = this.props;
    const { currencyCode: prevCode } = prevProps;

    if (prevCode !== actualCode && !actualCode) {
      this.createMarkers(this.banks);
      return;
    }

    if (prevCode !== actualCode) {
      this.filterMarkers();
    }
  }

  clearMarkers = (): void => {
    this.markers.forEach((marker: mapboxgl.Marker) => marker.remove());
  };

  filterMarkers = (): void => {
    const { currencyCode } = this.props;
    const filtered = this.banks.filter((data) => data.currencies.includes(currencyCode!));
    this.createMarkers(filtered);
  };

  createMarkers = (banksInfo: IBankData[]): void => {
    this.clearMarkers();

    banksInfo.forEach(({ name, address, coordinates, currencies }) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `
        <p>${name}</p>
        <p>${address}</p>
        <p> ${currencies.map((code) => `${code}`).join(', ')}</p>
        `,
      );
      const marker = new mapboxgl.Marker()
        .setLngLat([coordinates[0], coordinates[1]])
        .setPopup(popup)
        .addTo(this.map as mapboxgl.Map);
      this.markers.push(marker);
    });
  };

  getUserGeolocation = (location: GeolocationPosition): void => {
    const lng: number = location.coords.longitude;
    const lat: number = location.coords.latitude;
    this.setState({ lng, lat });

    if (this.map) {
      this.map.setCenter([lng, lat]);
    }
  };

  handleMapMove = (): void => {
    const lng: number = Number(this.map!.getCenter().lng.toFixed(4));
    const lat: number = Number(this.map!.getCenter().lat.toFixed(4));
    const zoom: number = Number(this.map!.getZoom().toFixed(2));

    this.setState({ lng, lat, zoom });
    this.getBanksInformationForMap(lng, lat);
  };

  getBanksInformationForMap = async (lng: number, lat: number): Promise<void> => {
    const banks: IBankData[] | null = await getBanksInformation(lng, lat);
    if (banks) {
      this.banks = banks;

      if (this.props.currencyCode) {
        this.filterMarkers();
        return;
      }

      this.createMarkers(banks);
    }
  };

  debounce = (func: () => void, delay: number) => (): void => {
    if (this.debounceTimerId) clearTimeout(this.debounceTimerId);
    this.debounceTimerId = setTimeout(func, delay);
  };

  render(): ReactNode {
    return (
      <StyledContainer>
        <StyledMapContainer ref={this.mapContainer} />
      </StyledContainer>
    );
  }
}

export default Map;
