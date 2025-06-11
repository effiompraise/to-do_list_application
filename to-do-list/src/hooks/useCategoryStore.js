import create from 'zustand';

export const useCategoryStore = create((set) => ({
  categories: ['Work', 'Personal', 'Shopping'],
  addCategory: (name) => set((state) => ({
    categories: [...state.categories, name]
  })),
  deleteCategory: (name) => set((state) => ({
    categories: state.categories.filter(c => c !== name)
  }))
}));