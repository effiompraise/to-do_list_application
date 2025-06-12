import React from 'react';

const CategoryList = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="space-y-2">
      <button
        onClick={() => onCategoryChange('all')}
        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
          activeCategory === 'all' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
        }`}
      >
        <span className="text-sm font-medium">All Tasks</span>
        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
          {categories.reduce((total, cat) => total + cat.count, 0)}
        </span>
      </button>
      
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id.toString())}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
            activeCategory === category.id.toString() ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
          }`}
        >
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
            <span className="text-sm font-medium">{category.name}</span>
          </div>
          <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
