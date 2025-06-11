import { useCategoryStore } from '../../hooks';
import { useState } from 'react';

const CategoryList = () => {
  const [newCategory, setNewCategory] = useState('');
  const { categories, addCategory, deleteCategory } = useCategoryStore();

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      addCategory(newCategory);
      setNewCategory('');
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New Category"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
          onClick={handleAddCategory}
        >
          Add Category
        </button>
      </div>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index} className="flex justify-between items-center">
            <span className="bg-gray-200 p-2 rounded">{category}</span>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => deleteCategory(category)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;