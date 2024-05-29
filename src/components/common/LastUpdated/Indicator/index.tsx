import IndicatorContainer from './styled';

const AMOUNT_OF_INDICATORS = 3;

interface IComponentProps {
  isLoading: boolean;
}

const Indicator: React.FC<IComponentProps> = ({ isLoading }) => {
  const array: number[] = Array.from({ length: AMOUNT_OF_INDICATORS }, (_, index) => index);

  return (
    <IndicatorContainer $isLoading={isLoading} data-testid="last-updated-indicator">
      {array.map((item) => (
        <div key={item} />
      ))}
    </IndicatorContainer>
  );
};

export default Indicator;
