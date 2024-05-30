import { Paragraph } from '@/components';

import StyledContainer from './styled';

const COPYRIGHT_TEXT = 'Startsup © 2023-2024, All Rights Reserved';

const Copyright: React.FC = () => (
  <StyledContainer data-testid="copyright">
    <Paragraph>{COPYRIGHT_TEXT}</Paragraph>
  </StyledContainer>
);

export default Copyright;
