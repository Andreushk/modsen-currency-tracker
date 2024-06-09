import { Component, ReactNode } from 'react';

import { SectionWithPaddings, Toast } from '@/components';
import { ANIMATION_DELAY_MULTIPLIER } from '@/components/common/Toast';
import { ChartEvents } from '@/constants/chartEvents';
import { BASE_CURRENCY } from '@/constants/currencies';
import { darkTheme } from '@/styles/theme';
import { AppCurrencyCodesType } from '@/types/api/currencies';
import { ICurrencyTimeline } from '@/types/chart';
import generateCurrencyTimeline from '@/utils/chart/generateCurrencyTimeline';
import observer from '@/utils/chart/observer';
import getPreviousDates from '@/utils/helpers/getPreviousDates';

import ChartPart from './ChartPart';
import Modal from './Modal';
import SelectedCurrency from './SelectedCurrency';
import SelectPart from './SelectPart';
import StyledContainer from './styled';

const CHART_TOAST_MESSAGE = 'The chart has been successfully created!';

interface IComponentState {
  selectedCurrencyCode: AppCurrencyCodesType;
  chartData: ICurrencyTimeline[] | null;
  selectKey: number;
  isShowModal: boolean;
  isShowToast: boolean;
}

class ChartSection extends Component<object, IComponentState> {
  prevMonthDates: string[];

  constructor(props: object) {
    super(props);

    this.prevMonthDates = getPreviousDates();

    this.state = {
      selectedCurrencyCode: BASE_CURRENCY,
      chartData: generateCurrencyTimeline(this.prevMonthDates),
      selectKey: 0,
      isShowModal: false,
      isShowToast: false,
    };
  }

  componentDidMount(): void {
    observer.subscribe(ChartEvents.CREATION, this.handleChartCreation);
  }

  componentWillUnmount(): void {
    observer.unsubscribe(ChartEvents.CREATION, this.handleChartCreation);
  }

  handleChartCreation = (): void => {
    this.setState({ isShowToast: true });

    const timerId = setTimeout(
      () => {
        this.setState({ isShowToast: false });
        clearTimeout(timerId);
      },
      darkTheme.durations.animations * 2 * ANIMATION_DELAY_MULTIPLIER,
    );
  };

  handleSelect = (currencyCode: AppCurrencyCodesType): void => {
    document.body.style.overflow = 'hidden';
    this.setState({ selectedCurrencyCode: currencyCode, chartData: null, isShowModal: true });
  };

  handleCancelModal = (): void => {
    document.body.style.overflow = 'unset';
    this.setState((prevState) => ({
      chartData: generateCurrencyTimeline(this.prevMonthDates),
      selectedCurrencyCode: BASE_CURRENCY,
      selectKey: prevState.selectKey + 1,
      isShowModal: false,
    }));
  };

  handleSaveModal = (chartData: ICurrencyTimeline[]): void => {
    document.body.style.overflow = 'unset';
    this.setState({ chartData, isShowModal: false });
  };

  render(): ReactNode {
    const { selectedCurrencyCode, chartData, selectKey, isShowModal, isShowToast } = this.state;

    return (
      <SectionWithPaddings>
        <StyledContainer>
          <SelectPart key={selectKey} onSelect={this.handleSelect} />
          <SelectedCurrency code={selectedCurrencyCode} />
          <ChartPart data={chartData} />
          {isShowModal && <Modal onCancel={this.handleCancelModal} onSave={this.handleSaveModal} />}
          {isShowToast && <Toast message={CHART_TOAST_MESSAGE} />}
        </StyledContainer>
      </SectionWithPaddings>
    );
  }
}

export default ChartSection;
