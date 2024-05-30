import { useSelector } from 'react-redux';

import { Logo } from '@/components';
import { RootState } from '@/state/store';

import StyledSection from './styled';
import TextPart from './TextPart';

const IntroductionSection: React.FC = () => {
  const isDarkMode: boolean = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <StyledSection $isDarkMode={isDarkMode}>
      <TextPart />
      <Logo width={300} height={312} />
    </StyledSection>
  );
};

export default IntroductionSection;
