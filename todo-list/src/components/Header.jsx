import React, { useState } from 'react';
import { FiMenu, FiBell, FiSearch } from 'react-icons/fi';

const Header = ({ sidebarOpen, setSidebarOpen, activeCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(3);
  
  const categoryColors = {
    'health': 'bg-green-500',
    'education': 'bg-purple-500',
    'group-work': 'bg-yellow-500',
    'food': 'bg-red-500',
    'lifestyle': 'bg-blue-500',
    'all': 'bg-indigo-500'
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  const clearNotifications = () => {
    setNotifications(0);
  };

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <button
          className="mr-4 lg:hidden text-gray-500 hover:text-gray-700"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FiMenu size={24} />
        </button>
        
        <div className="flex items-center">
          <div className={`p-2 rounded-lg mr-3 ${categoryColors[activeCategory]}`}>
            <div className="w-6 h-6 flex items-center justify-center text-white">
              {activeCategory.charAt(0).toUpperCase()}
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800 capitalize">
              {activeCategory.replace('-', ' ')} Tasks
            </h1>
            <p className="text-sm text-gray-500">Manage your tasks efficiently</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <form onSubmit={handleSearch} className="relative hidden md:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <FiSearch />
          </div>
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks..." 
            className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </form>
        
        <div className="relative">
          <button 
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
            onClick={clearNotifications}
          >
            <FiBell size={20} />
            {notifications > 0 && (
              <span className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {notifications}
              </span>
            )}
          </button>
        </div>
        
        <div className="flex items-center">
          <button 
            className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold"
            onClick={() => alert('Profile menu clicked')}
          >
            U
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;