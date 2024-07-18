import { Logo } from '@/components';
import { useAppSelector } from '@/hooks';
import { darkModeSelector } from '@/store/reducers/selectors';

import StyledSection from './styled';
import TextPart from './TextPart';

const IntroductionSection: React.FC = () => {
  const isDarkMode: boolean = useAppSelector(darkModeSelector);

  return (
    <StyledSection $isDarkMode={isDarkMode}>
      <TextPart />
      <Logo width={300} height={312} />
    </StyledSection>
  );
};

export default IntroductionSection;
