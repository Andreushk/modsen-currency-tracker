import StyledTitle, { IStyleProps } from './styled';

interface IComponentProps extends IStyleProps {
  as?: 'h1' | 'h2' | 'h3';
  children: string;
}

const AccentTitle: React.FC<IComponentProps> = ({ as, children, $variant }) => {
  const component: keyof React.JSX.IntrinsicElements = as ?? 'h1';

  return (
    <StyledTitle as={component} $variant={$variant}>
      {children}
    </StyledTitle>
  );
};

export default AccentTitle;
