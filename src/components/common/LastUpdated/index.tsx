import Indicator from './Indicator';
import StyledContainer from './styled';
import Text from './Text';

interface IComponentProps {
  isLoading: boolean;
  lastUpdated: string | null;
}

const LastUpdated: React.FC<IComponentProps> = ({ isLoading, lastUpdated }) => (
  <StyledContainer>
    <Indicator isLoading={isLoading} />
    <Text isLoading={isLoading} lastUpdated={lastUpdated} />
  </StyledContainer>
);

export default LastUpdated;
