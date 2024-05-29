import { PropsWithChildren } from 'react';

import StyledTitle from './styled';

const Title: React.FC<PropsWithChildren> = ({ children }) => <StyledTitle>{children}</StyledTitle>;

export default Title;
