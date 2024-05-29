import LoadingShimmer from '../LoadingShimmer';
import {
  StyledContainer,
  StyledCurrencyTitle,
  StyledCurrencyValue,
  StyledIconContainer,
  StyledInfoContainer,
} from './styled';

const LoadingCurrency: React.FC = () => (
  <StyledContainer>
    <StyledIconContainer>
      <LoadingShimmer />
    </StyledIconContainer>
    <StyledInfoContainer>
      <StyledCurrencyTitle>
        <LoadingShimmer />
      </StyledCurrencyTitle>
      <StyledCurrencyValue>
        <LoadingShimmer />
      </StyledCurrencyValue>
    </StyledInfoContainer>
  </StyledContainer>
);

export default LoadingCurrency;
