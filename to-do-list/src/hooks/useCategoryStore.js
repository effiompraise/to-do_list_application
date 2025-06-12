import { useState } from 'react';

export const useCategoryStore = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Work', color: 'bg-blue-500', count: 2 },
    { id: 2, name: 'Personal', color: 'bg-green-500', count: 1 },
    { id: 3, name: 'Shopping', color: 'bg-purple-500', count: 0 }
  ]);

  return { categories };
};