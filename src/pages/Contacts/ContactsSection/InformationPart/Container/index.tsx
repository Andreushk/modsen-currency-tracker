import { AccentTitle } from '@/components';

import StyledContainer from './styled';

interface IComponentProps {
  title: string;
  children: React.ReactNode;
}

const Container: React.FC<IComponentProps> = ({ title, children }) => (
  <StyledContainer>
    <AccentTitle as="h3" $variant="M">
      {title}
    </AccentTitle>
    {children}
  </StyledContainer>
);

export default Container;
