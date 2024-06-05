import { Title } from '@/components';

import { StyledContainer, StyledDivider, StyledGridContainer } from './styled';

interface IComponentProps {
  title: string;
  children: React.ReactNode;
  onClick?: (element: HTMLElement) => void;
}

const CurrenciesGrid: React.FC<IComponentProps> = ({ title, children, onClick }) => {
  const handleGridClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    const clickedElement = e.target as HTMLElement;
    if (clickedElement && onClick) {
      onClick(clickedElement);
    }
  };

  return (
    <StyledContainer onClick={onClick && handleGridClick}>
      <Title $fontSize="M" $fontWeight="light">
        {title}
      </Title>
      <StyledDivider />
      <StyledGridContainer>{children}</StyledGridContainer>
    </StyledContainer>
  );
};

export default CurrenciesGrid;
