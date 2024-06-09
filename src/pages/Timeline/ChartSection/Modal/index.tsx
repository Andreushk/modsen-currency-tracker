import { Component, ReactNode } from 'react';

import { ModalWindow, Overlay, PortalToBody } from '@/components';
import { ICurrencyTimeline } from '@/types/chart';

import Form from './Form';

const MODAL_TITLE = 'Enter required information';

interface IComponentProps {
  onCancel: () => void;
  onSave: (chartData: ICurrencyTimeline[]) => void;
}

class Modal extends Component<IComponentProps> {
  render(): ReactNode {
    return (
      <PortalToBody>
        <Overlay>
          <ModalWindow title={MODAL_TITLE}>
            <Form onCancel={this.props.onCancel} onSave={this.props.onSave} />
          </ModalWindow>
        </Overlay>
      </PortalToBody>
    );
  }
}

export default Modal;
