import { Component, createRef, ReactNode, RefObject } from 'react';

import { ModalWindow, Overlay, Paragraph, PortalToBody } from '@/components';
import { ICurrencyTimeline } from '@/types/chart';
import generateCurrencyTimeline from '@/utils/chart/generateCurrencyTimeline';
import getPreviousDates from '@/utils/helpers/getPreviousDates';

import Buttons from './Buttons';
import InputList from './Inputs';
import INPUTS_OPTIONS from './options';
import StyledContainer from './styled';

const MODAL_TITLE = 'Enter required information';

interface IComponentProps {
  onCancel: () => void;
  onSave: (chartData: ICurrencyTimeline[]) => void;
}

interface IComponentState {
  currentDateIndex: number;
}

class Modal extends Component<IComponentProps, IComponentState> {
  lastMonthDates = getPreviousDates(30);

  chartDataArray: ICurrencyTimeline[] = [];

  inputRefs: RefObject<HTMLInputElement>[] = INPUTS_OPTIONS.map(() =>
    createRef<HTMLInputElement>(),
  );

  constructor(props: IComponentProps) {
    super(props);
    this.state = { currentDateIndex: 0 };
  }

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
      timeClose: this.lastMonthDates[this.state.currentDateIndex],
      priceOpen: Number(inputOpen.current.value),
      priceClose: Number(inputClose.current.value),
      priceHigh: Number(inputHigh.current.value),
      priceLow: Number(inputLow.current.value),
    };

    this.chartDataArray.push(dayDate);

    if (this.chartDataArray.length === this.lastMonthDates.length) {
      this.props.onSave(this.chartDataArray);
      return;
    }

    this.setState((prevState) => ({ currentDateIndex: prevState.currentDateIndex + 1 }));
  };

  handleRandomizeButtonClick = (): void => {
    const result = generateCurrencyTimeline(this.lastMonthDates);
    this.props.onSave(result);
  };

  render(): ReactNode {
    return (
      <PortalToBody>
        <Overlay>
          <ModalWindow title={MODAL_TITLE}>
            <StyledContainer>
              <Paragraph>{this.lastMonthDates[this.state.currentDateIndex]}</Paragraph>
              <InputList key={this.state.currentDateIndex} inputRefs={this.inputRefs} />
              <Buttons
                onCancel={this.props.onCancel}
                onNextDay={this.handleNextDayButtonClick}
                onRandomize={this.handleRandomizeButtonClick}
              />
            </StyledContainer>
          </ModalWindow>
        </Overlay>
      </PortalToBody>
    );
  }
}

export default Modal;
