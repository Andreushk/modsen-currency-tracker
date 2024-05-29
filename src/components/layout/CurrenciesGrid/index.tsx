import { Title } from '@/components';

import { StyledContainer, StyledDivider, StyledGridContainer } from './styled';

interface IComponentProps {
  title: string;
  children: React.ReactNode;
}

const CurrenciesGrid: React.FC<IComponentProps> = ({ title, children }) => (
  <StyledContainer>
    <Title>{title}</Title>
    <StyledDivider />
    <StyledGridContainer>{children}</StyledGridContainer>
  </StyledContainer>
);

export default CurrenciesGrid;
