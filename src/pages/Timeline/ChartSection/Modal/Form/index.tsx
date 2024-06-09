import { Component, createRef, ReactNode, RefObject } from 'react';

import { Paragraph } from '@/components';
import { ICurrencyTimeline } from '@/types/chart';
import generateCurrencyTimeline from '@/utils/chart/generateCurrencyTimeline';
import getPreviousDates from '@/utils/helpers/getPreviousDates';

import INPUTS_OPTIONS from '../options';
import Buttons from './Buttons';
import InputsList from './InputsList';
import StyledContainer from './styled';

interface IComponentProps {
  onCancel: () => void;
  onSave: (chartData: ICurrencyTimeline[]) => void;
}

interface IComponentState {
  dayIndex: number;
}

class Form extends Component<IComponentProps, IComponentState> {
  prevMonthDates: string[];

  datesChartData: ICurrencyTimeline[];

  inputRefs: RefObject<HTMLInputElement>[];

  constructor(props: IComponentProps) {
    super(props);

    this.prevMonthDates = getPreviousDates();
    this.datesChartData = [];
    this.inputRefs = INPUTS_OPTIONS.map(() => createRef<HTMLInputElement>());

    this.state = { dayIndex: 0 };
  }

  handlePrevDayButtonClick = (): void => {
    if (this.state.dayIndex !== 0) {
      this.setState((prevState) => ({ dayIndex: prevState.dayIndex - 1 }));
    }
  };

  handleNextDayButtonClick = (): void => {
    const [inputOpen, inputClose, inputHigh, inputLow] = this.inputRefs;

    if (
      !inputOpen?.current?.value ||
      !inputClose?.current?.value ||
      !inputHigh?.current?.value ||
      !inputLow?.current?.value
    ) {
      return;
    }

    const dayDate: ICurrencyTimeline = {
      timeClose: this.prevMonthDates[this.state.dayIndex],
      priceOpen: Number(inputOpen.current.value),
      priceClose: Number(inputClose.current.value),
      priceHigh: Number(inputHigh.current.value),
      priceLow: Number(inputLow.current.value),
    };

    this.datesChartData[this.state.dayIndex] = dayDate;

    if (this.datesChartData.length === this.prevMonthDates.length) {
      this.props.onSave(this.datesChartData);
      return;
    }

    this.setState((prevState) => ({ dayIndex: prevState.dayIndex + 1 }));
  };

  handleRandomizeButtonClick = (): void => {
    const result = generateCurrencyTimeline(this.prevMonthDates);
    this.props.onSave(result);
  };

  render(): ReactNode {
    const { dayIndex } = this.state;

    return (
      <StyledContainer data-testid="timeline-modal">
        <Paragraph>{this.prevMonthDates[dayIndex]}</Paragraph>
        <InputsList
          key={dayIndex}
          inputRefs={this.inputRefs}
          dayData={this.datesChartData[dayIndex]}
        />
        <Buttons
          onCancel={this.props.onCancel}
          onPrevDay={this.handlePrevDayButtonClick}
          onNextDay={this.handleNextDayButtonClick}
          onRandomize={this.handleRandomizeButtonClick}
        />
      </StyledContainer>
    );
  }
}

export default Form;
