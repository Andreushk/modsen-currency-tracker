import { Title } from '@/components';
import formatIsoToHours from '@/utils/time/formatIsoToHours';

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

  return <Title>{isLoading ? LOADING_TEXT : formattedTime}</Title>;
};

export default Text;
