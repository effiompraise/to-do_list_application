import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash2, FiCheck, FiX } from 'react-icons/fi';
import useTodoStore from '../../store/todoStore';
import IconWrapper from '../IconWrapper';
import CategoryIcon from '../Category/CategoryIcon';

type TodoItemProps = {
  todo: {
    id: string;
    text: string;
    completed: boolean;
    category: string;
  };
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editCategory, setEditCategory] = useState(todo.category);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const updateCategory = useTodoStore((state) => state.updateCategory);
  
  const categories = ['health', 'education', 'group-work', 'food', 'lifestyle'];

  useEffect(() => {
    setEditText(todo.text);
    setEditCategory(todo.category);
  }, [todo.text, todo.category]);

  const handleUpdate = () => {
    if (editText.trim()) {
      updateTodo(todo.id, editText);
      updateCategory(todo.id, editCategory as any);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
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
          onChange={() => toggleTodo(todo.id)}
          className="h-5 w-5 text-primary rounded focus:ring-primary cursor-pointer"
        />
      </div>
      
      {isEditing ? (
        <div className="flex-1 flex flex-col mr-4">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 px-3 py-2 border-b-2 border-primary focus:outline-none mb-2"
            autoFocus
          />
          <div className="flex space-x-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setEditCategory(cat)}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  editCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <CategoryIcon category={cat} size={12} className="inline mr-1" />
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
            <CategoryIcon category={todo.category} size={14} className="text-gray-500 mr-1" />
            <span className="text-xs text-gray-500 capitalize">
              {todo.category.replace('-', ' ')}
            </span>
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
              <IconWrapper icon={FiCheck} size={18} />
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditText(todo.text);
                setEditCategory(todo.category);
              }}
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
              aria-label="Cancel edit"
            >
              <IconWrapper icon={FiX} size={18} />
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
              <IconWrapper icon={FiEdit} size={18} />
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
              aria-label="Delete todo"
            >
              <IconWrapper icon={FiTrash2} size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;