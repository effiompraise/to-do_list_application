import React from 'react';
import { Check, Trash2, Calendar, Tag } from 'lucide-react';
import { formatDate, getPriorityColor } from '../../../utils/dateUtils';

const TaskItem = ({ task, onToggle, onDelete, categories }) => {
  const category = categories.find(c => c.id === task.categoryId);
  
  return (
    <div className={`bg-white rounded-lg p-4 shadow-sm border-l-4 ${getPriorityColor(task.priority)} mb-3 transition-all duration-200 hover:shadow-md`}>
      <div className="flex items-start space-x-3">
        <button
          onClick={() => onToggle(task.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            task.completed 
              ? 'bg-green-500 border-green-500 text-white' 
              : 'border-gray-300 hover:border-green-400'
          }`}
        >
          {task.completed && <Check size={14} />}
        </button>
        
        <div className="flex-1 min-w-0">
          <h3 className={`text-sm font-medium transition-all duration-200 ${
            task.completed ? 'text-gray-500 line-through' : 'text-gray-900'
          }`}>
            {task.title}
          </h3>
          
          <div className="flex items-center space-x-3 mt-2">
            {category && (
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${category.color}`}>
                <Tag size={12} className="mr-1" />
                {category.name}
              </span>
            )}
            
            {task.dueDate && (
              <span className="inline-flex items-center text-xs text-gray-500">
                <Calendar size={12} className="mr-1" />
                {formatDate(task.dueDate)}
              </span>
            )}
          </div>
        </div>
        
        <button
          onClick={() => onDelete(task.id)}
          className="flex-shrink-0 p-1 text-gray-400 hover:text-red-500 transition-colors duration-200"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;