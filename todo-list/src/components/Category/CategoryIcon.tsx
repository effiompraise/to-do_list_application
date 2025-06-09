import { 
  FiHeart, 
  FiBook, 
  FiUsers, 
  FiCoffee, 
  FiHome 
} from 'react-icons/fi';
import IconWrapper from '../IconWrapper';

type CategoryIconProps = {
  category: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

const CategoryIcon = ({ 
  category, 
  size = 24, 
  className = '',
  style 
}: CategoryIconProps) => {
  const iconMap: Record<string, React.ElementType> = {
    'health': FiHeart,
    'education': FiBook,
    'group-work': FiUsers,
    'food': FiCoffee,
    'lifestyle': FiHome,
    'all': FiHeart
  };

  const Icon = iconMap[category] || FiHeart;
  
  return (
    <IconWrapper 
      icon={Icon} 
      size={size} 
      className={className}
      style={style} 
    />
  );
};

export default CategoryIcon;