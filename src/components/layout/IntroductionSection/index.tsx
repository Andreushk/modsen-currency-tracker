import { Logo } from '@/components';
import useAppSelector from '@/hooks/useAppSelector';

import StyledSection from './styled';
import TextPart from './TextPart';

const IntroductionSection: React.FC = () => {
  const isDarkMode: boolean = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <StyledSection $isDarkMode={isDarkMode}>
      <TextPart />
      <Logo width={300} height={312} />
    </StyledSection>
  );
};

export default IntroductionSection;
