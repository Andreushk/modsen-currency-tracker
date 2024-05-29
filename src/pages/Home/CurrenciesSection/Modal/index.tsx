import { ModalWindow, Overlay, PortalToBody } from '@/components';
import { AppCurrencyCodesType } from '@/types/api/currencies';

import Exchange from './Exchange';

const MODAL_WINDOW_TITLE = 'Exchange';

interface IComponentProps {
  selectedCurrencyCode: AppCurrencyCodesType;
  onClose: () => void;
}

const Modal: React.FC<IComponentProps> = ({ selectedCurrencyCode, onClose }) => (
  <PortalToBody>
    <Overlay clickCB={onClose}>
      <ModalWindow title={MODAL_WINDOW_TITLE}>
        <Exchange baseCurrency={selectedCurrencyCode} />
      </ModalWindow>
    </Overlay>
  </PortalToBody>
);

export default Modal;
