import { PropsWithChildren } from 'react';

import StyledSection from './styled';

const SectionWithPaddings: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledSection>{children}</StyledSection>
);

export default SectionWithPaddings;
