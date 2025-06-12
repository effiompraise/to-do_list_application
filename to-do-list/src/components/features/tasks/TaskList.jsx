import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, categories, onToggle, onDelete, searchTerm, filterCategory, filterStatus }) => {
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || task.categoryId === parseInt(filterCategory);
    const matchesStatus = filterStatus === 'all' || 
      (filterStatus === 'completed' && task.completed) ||
      (filterStatus === 'pending' && !task.completed);
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg mb-2">📝</div>
        <p className="text-gray-500">No tasks found</p>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          categories={categories}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;