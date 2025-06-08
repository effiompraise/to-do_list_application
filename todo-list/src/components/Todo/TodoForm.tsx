import React, { useState } from 'react';
import IconWrapper from '../IconWrapper';
import { FiPlus } from 'react-icons/fi';
import useTodoStore from '../../store/todoStore';
import CategoryIcon from '../Category/CategoryIcon';
import { Category } from '../../store/todoStore';

const categories = ['health', 'education', 'group-work', 'food', 'lifestyle'] as Category[];

const TodoForm = ({ activeCategory }: { activeCategory: Category }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState<Category>(activeCategory === 'all' ? 'health' : activeCategory);
  const addTodo = useTodoStore((state) => state.addTodo);
  
  const categoryColors: Record<Category, string> = {
    'health': '#10b981',
    'education': '#8b5cf6',
    'group-work': '#f59e0b',
    'food': '#ef4444',
    'lifestyle': '#3b82f6',
    'all': '#6366f1'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && category) {
      addTodo(text, category);
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
          <IconWrapper icon={FiPlus} className="inline" /> Add
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`flex items-center px-3 py-2 rounded-lg transition-all ${
              category === cat
                ? 'text-white font-medium'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={{
              backgroundColor: category === cat ? categoryColors[cat] : undefined
            }}
          >
            <CategoryIcon 
              category={cat} 
              size={16} 
              className="mr-2" 
              style={{ 
                color: category === cat ? 'white' : categoryColors[cat]
              }}
            />
            <span className="text-sm capitalize">{cat.replace('-', ' ')}</span>
          </button>
        ))}
      </div>
    </form>
  );
};

export default TodoForm;