import { 
  FiHeart, 
  FiBook, 
  FiUsers, 
  FiCoffee, 
  FiHome 
} from 'react-icons/fi';
import IconWrapper from '../IconWrapper';
import { Category } from '../../store/todoStore';

type CategoryIconProps = {
  category: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

const CategoryIcon = ({ category, size = 24, className = '', style }: CategoryIconProps) => {
  const iconMap: Record<string, React.ElementType> = {
    'health': FiHeart,
    'education': FiBook,
    'group-work': FiUsers,
    'food': FiCoffee,
    'lifestyle': FiHome,
    'all': FiHeart
  };

  const IconComponent = iconMap[category] || FiHeart;
  
  return <IconWrapper icon={IconComponent} size={size} className={className} style={style} />;
};

export default CategoryIcon;