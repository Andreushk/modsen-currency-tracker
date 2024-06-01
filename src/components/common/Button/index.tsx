import StyledButton, { IStyleProps } from './styled';

interface IComponentProps extends IStyleProps {
  value: string;
  onClick: () => void;
}

const Button: React.FC<IComponentProps> = ({ value, onClick, $colorVariant = 'primary' }) => (
  <StyledButton type="button" $colorVariant={$colorVariant} onClick={onClick}>
    {value}
  </StyledButton>
);

export default Button;
