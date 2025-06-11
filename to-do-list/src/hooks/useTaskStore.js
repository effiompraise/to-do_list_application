import create from 'zustand';

export const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  updateTask: (id, updates) => set((state) => ({
    tasks: state.tasks.map(t => t.id === id ? { ...t, ...updates } : t)
  })),
  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter(t => t.id !== id)
  })),
  moveTask: (dragId, hoverId, toCategory) => set((state) => {
    const fromIndex = state.tasks.findIndex(t => t.id === dragId);
    const newTasks = [...state.tasks];
    newTasks[fromIndex].categoryId = toCategory;
    return { tasks: newTasks };
  }),
  clearCompleted: () => set((state) => ({
    tasks: state.tasks.filter(t => !t.completed)
  }))
}));