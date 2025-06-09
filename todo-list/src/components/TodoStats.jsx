import React from 'react';
import ProgressRing from './ProgressRing';

const TodoStats = ({ activeCategory }) => {
  // In a real app, this would come from Zustand store
  const stats = {
    'all': { total: 12, completed: 5 },
    'health': { total: 4, completed: 1 },
    'education': { total: 3, completed: 2 },
    'group-work': { total: 2, completed: 1 },
    'food': { total: 2, completed: 1 },
    'lifestyle': { total: 1, completed: 0 }
  };
  
  const categoryStats = activeCategory === 'all' 
    ? stats 
    : { [activeCategory]: stats[activeCategory] };
  
  const categoryColors = {
    'health': 'bg-green-500',
    'education': 'bg-purple-500',
    'group-work': 'bg-yellow-500',
    'food': 'bg-red-500',
    'lifestyle': 'bg-blue-500',
    'all': 'bg-indigo-500'
  };

  return (
    <div className="space-y-6">
      {Object.entries(categoryStats).map(([cat, stat]) => {
        const progress = stat.total ? Math.round((stat.completed / stat.total) * 100) : 0;
        const colorClass = categoryColors[cat] || 'bg-gray-400';

        return (
          <div key={cat} className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-medium text-gray-700 capitalize">
                {cat.replace('-', ' ')}
              </h4>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div 
                  className={`h-2.5 rounded-full transition-all duration-500 ease-out ${colorClass}`} 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>{stat.completed} completed</span>
                <span>{stat.total} total</span>
              </div>
            </div>
            
            <div className="ml-4">
              <ProgressRing 
                progress={progress}
                size={70}
                strokeWidth={6}
                color={colorClass.replace('bg-', '')}
              />
            </div>
          </div>
        );
      })}
      
      <div className="pt-4 border-t border-gray-200 mt-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Productivity</span>
          <span className="font-medium">87%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div 
            className="h-2.5 rounded-full bg-gradient-to-r from-green-400 to-blue-500" 
            style={{ width: `87%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TodoStats;
