import { FiClipboard } from 'react-icons/fi';
import IconWrapper from '../IconWrapper';

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <IconWrapper icon={FiClipboard} className="text-gray-300 text-6xl mb-4" />
      <h3 className="text-lg font-medium text-gray-500 mb-1">
        No tasks yet
      </h3>
      <p className="text-gray-400">
        Add your first task to get started
      </p>
    </div>
  );
};

export default EmptyState;