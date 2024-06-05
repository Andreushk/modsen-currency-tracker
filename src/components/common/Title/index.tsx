import StyledTitle, { IStyleProps } from './styled';

type TitleTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface IComponentProps extends IStyleProps {
  as?: TitleTypes;
  children: string;
}

const Title: React.FC<IComponentProps> = ({ children, as, $fontSize, $fontWeight }) => {
  const component: keyof React.JSX.IntrinsicElements = as ?? 'h1';

  return (
    <StyledTitle as={component} $fontSize={$fontSize} $fontWeight={$fontWeight}>
      {children}
    </StyledTitle>
  );
};

export default Title;
