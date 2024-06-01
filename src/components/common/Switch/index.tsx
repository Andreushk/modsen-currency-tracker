import { StyledButton, StyledSpan } from './styled';

interface IComponentProps {
  isOn: boolean;
  onClick: () => void;
}

const Switch: React.FC<IComponentProps> = ({ isOn, onClick }) => (
  <StyledButton type="button" onClick={onClick} data-testid="switch">
    <StyledSpan $isOn={isOn} />
  </StyledButton>
);

export default Switch;
