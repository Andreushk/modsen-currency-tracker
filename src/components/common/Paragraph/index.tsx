import { PropsWithChildren } from 'react';

import StyledParagraph from './styled';

const Paragraph: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledParagraph>{children}</StyledParagraph>
);

export default Paragraph;
