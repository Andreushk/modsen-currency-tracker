import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

import Paragraph from '../Paragraph';
import StyledContainer from './styled';

export const ANIMATION_DELAY_MULTIPLIER = 10;

interface IComponentProps {
  message: string;
}

const Toast: React.FC<IComponentProps> = ({ message }) => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect((): void => {
    setIsVisible(true);

    const timerId = setTimeout((): void => {
      setIsVisible(false);
      clearTimeout(timerId);
    }, theme.durations.animations * ANIMATION_DELAY_MULTIPLIER);
  }, [theme]);

  return (
    <StyledContainer $isVisible={isVisible} data-testid="toast">
      <Paragraph>{message}</Paragraph>
    </StyledContainer>
  );
};

export default Toast;
