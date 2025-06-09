import React, { useState } from 'react';
import { FiEdit, FiTrash2, FiCheck, FiX } from 'react-icons/fi';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editCategory, setEditCategory] = useState(todo.category);
  
  const categories = ['health', 'education', 'group-work', 'food', 'lifestyle'];
  
  const categoryColors = {
    'health': 'bg-green-500',
    'education': 'bg-purple-500',
    'group-work': 'bg-yellow-500',
    'food': 'bg-red-500',
    'lifestyle': 'bg-blue-500'
  };

  const handleUpdate = () => {
    if (editText.trim()) {
      alert(`Updated todo: ${editText} in ${editCategory}`);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleUpdate();
    }
  };

  return (
    <div className="flex items-center p-4 bg-white rounded-xl shadow mb-3 hover:shadow-md transition-all">
      <div className="mr-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => alert('Toggle todo')}
          className="h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500 cursor-pointer"
        />
      </div>
      
      {isEditing ? (
        <div className="flex-1 flex flex-col mr-4">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 px-3 py-2 border-b-2 border-indigo-500 focus:outline-none mb-2"
            autoFocus
          />
          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setEditCategory(cat)}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  editCategory === cat
                    ? 'text-white font-medium'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } ${categoryColors[cat]}`}
              >
                {cat.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1">
          <span
            className={`block ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
          >
            {todo.text}
          </span>
          <div className="mt-1 flex items-center">
            <div className={`px-2 py-1 text-xs rounded ${categoryColors[todo.category]} text-white`}>
              {todo.category.replace('-', ' ')}
            </div>
          </div>
        </div>
      )}

      <div className="flex space-x-1">
        {isEditing ? (
          <>
            <button
              onClick={handleUpdate}
              className="p-2 text-green-500 hover:bg-green-50 rounded-lg"
              aria-label="Save changes"
            >
              <FiCheck size={18} />
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
              aria-label="Cancel edit"
            >
              <FiX size={18} />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={todo.completed}
              aria-label="Edit todo"
            >
              <FiEdit size={18} />
            </button>
            <button
              onClick={() => alert('Delete todo')}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
              aria-label="Delete todo"
            >
              <FiTrash2 size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;