import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const TodoForm = ({ activeCategory }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(activeCategory === 'all' ? 'health' : activeCategory);
  
  const categories = ['health', 'education', 'group-work', 'food', 'lifestyle'];
  
  const categoryColors = {
    'health': 'bg-green-500',
    'education': 'bg-purple-500',
    'group-work': 'bg-yellow-500',
    'food': 'bg-red-500',
    'lifestyle': 'bg-blue-500'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      // Add todo logic would go here
      alert(`Added todo: ${text} to ${category}`);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-5 py-3 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          <FiPlus className="inline" /> Add
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
              category === cat
                ? 'text-white font-medium'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } ${categoryColors[cat]}`}
          >
            <span className="text-sm capitalize">{cat.replace('-', ' ')}</span>
          </button>
        ))}
      </div>
    </form>
  );
};

export default TodoForm;