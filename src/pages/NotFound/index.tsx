import { Paragraph, SectionWithPaddings, Title } from '@/components';

import StyledContainer from './styled';

const PAGE_TITLE = "There's no such page";
const PAGE_DESCRIPTION =
  'You may have entered an incorrect URL or followed a link that does not exist. Try using the navigation bar at the top!';

const NotFound: React.FC = () => (
  <main>
    <SectionWithPaddings>
      <StyledContainer>
        <Title $fontSize="M" $fontWeight="regular">
          {PAGE_TITLE}
        </Title>
        <Paragraph>{PAGE_DESCRIPTION}</Paragraph>
      </StyledContainer>
    </SectionWithPaddings>
  </main>
);

export default NotFound;
