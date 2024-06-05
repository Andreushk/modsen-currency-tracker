import { Title } from '@/components';
import formatIsoToHours from '@/utils/helpers/formatIsoToHours';

const LOADING_TEXT = 'Loading...';

interface IComponentProps {
  isLoading: boolean;
  lastUpdated: string | null;
}

const Text: React.FC<IComponentProps> = ({ isLoading, lastUpdated }) => {
  let formattedTime: string = 'No information about update time';

  if (lastUpdated && !isLoading) {
    formattedTime = `Last updated at ${formatIsoToHours(lastUpdated)}`;
  }

  return (
    <Title as="h5" $fontSize="M" $fontWeight="light">
      {isLoading ? LOADING_TEXT : formattedTime}
    </Title>
  );
};

export default Text;
