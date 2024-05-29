import Title from '../Title';
import StyledModalWindowContainer from './styled';

interface IComponentProps {
  title: string;
  children: React.ReactNode;
}

const ModalWindow: React.FC<IComponentProps> = ({ title, children }) => {
  const handleClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  return (
    <StyledModalWindowContainer onClick={handleClick}>
      <Title>{title}</Title>
      {children}
    </StyledModalWindowContainer>
  );
};

export default ModalWindow;
