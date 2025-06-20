import React from 'react';
import CategoryNav from './CategoryNav';

const Sidebar = ({ activeCategory, setActiveCategory, sidebarOpen }) => {
  return (
    <div 
      className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-gray-900 text-white transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-auto`}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center mb-8">
          <div className="bg-indigo-600 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
            T
          </div>
          <h1 className="text-xl font-bold">TaskFlow</h1>
        </div>
        
        <div className="flex-1 min-h-0">
          <CategoryNav 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
        </div>
        
        <div className="pt-4 border-t border-gray-700">
          <button 
            className="flex items-center w-full p-3 text-gray-300 hover:bg-gray-800 rounded-lg"
            onClick={() => alert('Settings clicked')}
          >
            <div className="p-2 rounded-lg mr-3 bg-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="font-medium">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;