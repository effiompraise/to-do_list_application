import { useState } from 'react';

export const useTaskStore = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete project proposal', completed: false, categoryId: 1, dueDate: '2024-06-15', priority: 'high' },
    { id: 2, title: 'Review design mockups', completed: true, categoryId: 2, dueDate: '2024-06-12', priority: 'medium' },
    { id: 3, title: 'Update documentation', completed: false, categoryId: 1, dueDate: '2024-06-20', priority: 'low' }
  ]);

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
      completed: false
    };
    setTasks(prev => [...prev, newTask]);
  };

  const updateTask = (id, updates) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, ...updates } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return { tasks, addTask, updateTask, deleteTask, toggleTask };
};