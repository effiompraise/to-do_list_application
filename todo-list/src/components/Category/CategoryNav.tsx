import React from 'react';
import CategoryIcon from './CategoryIcon';
import useTodoStore from '../../store/todoStore';
import ProgressRing from '../UI/ProgressRing';
import { Category } from '../../store/todoStore';

type CategoryNavProps = {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
};

const categories: Category[] = ['health', 'education', 'group-work', 'food', 'lifestyle'];

const CategoryNav = ({ activeCategory, setActiveCategory }: CategoryNavProps) => {
  const getCategoryStats = useTodoStore((state) => state.getCategoryStats);
  const stats = getCategoryStats();
  
  const categoryColors: Record<Category, string> = {
    'health': '#10b981',
    'education': '#8b5cf6',
    'group-work': '#f59e0b',
    'food': '#ef4444',
    'lifestyle': '#3b82f6',
    'all': '#6366f1'
  };

  return (
    <div className="space-y-6">
      
      <button
        className={`flex items-center w-full p-4 rounded-xl transition-all transform hover:scale-[1.02] ${
          activeCategory === 'all' 
            ? 'bg-indigo-700 text-white shadow-lg' 
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
        onClick={() => setActiveCategory('all')}
      >
        <div className="bg-indigo-500 p-3 rounded-lg mr-4">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="font-bold">A</span>
          </div>
        </div>
        <div className="flex-1 text-left">
          <span className="font-medium block">All Tasks</span>
          <span className="text-sm opacity-75">
            {stats['all'].total} tasks
          </span>
        </div>
        <ProgressRing 
          progress={stats['all'].total ? Math.round((stats['all'].completed / stats['all'].total) * 100) : 0}
          size={50}
          strokeWidth={4}
          color="#a5b4fc"
          bgColor="#4b5563"
        />
      </button>
      
      
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-4">
          Categories
        </h3>
        
        {categories.map((category) => {
          const categoryStats = stats[category];
          const categoryProgress = categoryStats.total 
            ? Math.round((categoryStats.completed / categoryStats.total) * 100) 
            : 0;
            
          return (
            <button
              key={category}
              className={`flex items-center w-full p-4 rounded-xl transition-all transform hover:scale-[1.02] ${
                activeCategory === category 
                  ? 'bg-gray-700 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              <div 
                className="p-3 rounded-lg mr-4" 
                style={{ backgroundColor: `${categoryColors[category]}20` }}
              >
                <CategoryIcon 
                  category={category} 
                  className="text-white"
                />
              </div>
              <div className="flex-1 text-left">
                <span className="font-medium block capitalize">
                  {category.replace('-', ' ')}
                </span>
                <span className="text-sm opacity-75">
                  {categoryStats.completed} of {categoryStats.total} completed
                </span>
              </div>
              <ProgressRing 
                progress={categoryProgress}
                size={50}
                strokeWidth={4}
                color={categoryColors[category]}
                bgColor="#4b5563"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNav;