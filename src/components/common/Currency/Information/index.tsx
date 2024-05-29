import { StyledContainer, StyledCurrencyTitle, StyledCurrencyValue } from './styled';

interface IComponentProps {
  title: string;
  value: string;
}

const Information: React.FC<IComponentProps> = ({ title, value }) => (
  <StyledContainer>
    <StyledCurrencyTitle>{title}</StyledCurrencyTitle>
    <StyledCurrencyValue>{value}</StyledCurrencyValue>
  </StyledContainer>
);

export default Information;
