import { useHotkeys } from 'react-hotkeys-hook';
import { useTaskStore } from '../hooks/useTaskStore';

export const useTaskShortcuts = () => {
  const addTask = useTaskStore(state => state.addTask);
  const clearCompleted = useTaskStore(state => state.clearCompleted);

  useHotkeys('ctrl+n', () => {
    addTask({ 
      id: Date.now().toString(),
      title: 'New Task',
      dueDate: formatDate(new Date()),
      categoryId: 'Work',
      completed: false 
    });
  });

  useHotkeys('ctrl+c', () => {
    clearCompleted();
  });
};