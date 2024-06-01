import { Component } from 'react';

import { Toast } from '@/components';
import { ANIMATION_DELAY_MULTIPLIER } from '@/components/common/Toast';
import { ChartEvents } from '@/constants/chartEvents';
import { darkTheme } from '@/styles/theme';
import { AppCurrencyCodesType } from '@/types/api/currencies';
import { ICurrencyTimeline } from '@/types/chart';
import observer from '@/utils/chart/observer';

import ChartPart from './ChartPart';
import Modal from './Modal';
import SelectedCurrencyPart from './SelectedCurrencyPart';
import SelectPart from './SelectPart';
import { StyledSection, StyledSectionContentContainer } from './styled';

const CHART_TOAST_MESSAGE = 'The chart has been successfully created!';

interface IComponentState {
  selectKey: number;
  selectedCurrencyCode: AppCurrencyCodesType | null;
  chartData: ICurrencyTimeline[] | null;
  showToast: boolean;
}

class ChartSection extends Component<object, IComponentState> {
  constructor(props: object) {
    super(props);

    this.state = { selectedCurrencyCode: null, chartData: null, selectKey: 1, showToast: false };
  }

  componentDidMount(): void {
    observer.subscribe(ChartEvents.CREATION, this.handleChartCreation);
  }

  componentWillUnmount(): void {
    observer.unsubscribe(ChartEvents.CREATION, this.handleChartCreation);
  }

  handleChartCreation = (): void => {
    this.setState({ showToast: true });

    const timerId = setTimeout(
      () => {
        this.setState({ showToast: false });
        clearTimeout(timerId);
      },
      darkTheme.durations.animations * 2 * ANIMATION_DELAY_MULTIPLIER,
    );
  };

  handleSelect = (selectedCurrencyCode: AppCurrencyCodesType): void => {
    this.setState({ selectedCurrencyCode, chartData: null });
  };

  handleSaveModal = (chartData: ICurrencyTimeline[]): void => {
    this.setState({ chartData });
  };

  handleCancelModal = (): void => {
    this.setState((prevState) => ({
      chartData: null,
      selectedCurrencyCode: null,
      selectKey: prevState.selectKey + 1,
    }));
  };

  render(): React.ReactNode {
    const { selectedCurrencyCode, chartData, selectKey, showToast } = this.state;

    return (
      <StyledSection>
        <StyledSectionContentContainer>
          <SelectPart key={selectKey} onSelect={this.handleSelect} />
          <SelectedCurrencyPart code={selectedCurrencyCode} />
          <ChartPart data={chartData} />
          {selectedCurrencyCode && !chartData && (
            <Modal onCancel={this.handleCancelModal} onSave={this.handleSaveModal} />
          )}
          {showToast && <Toast message={CHART_TOAST_MESSAGE} />}
        </StyledSectionContentContainer>
      </StyledSection>
    );
  }
}

export default ChartSection;
