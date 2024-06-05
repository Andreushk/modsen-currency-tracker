import { Link } from '@/components';

import Container from './Container';
import CONTACTS from './options';
import StyledContainer from './styled';

const InformationPart: React.FC = () => (
  <StyledContainer>
    {CONTACTS.map(({ title, value, link, isBlank }) => (
      <Container key={title} title={title}>
        <Link href={link} isBlank={isBlank} $isDark>
          {value}
        </Link>
      </Container>
    ))}
  </StyledContainer>
);

export default InformationPart;
