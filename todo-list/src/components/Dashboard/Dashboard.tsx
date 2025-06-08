import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import { Category } from '../../store/todoStore';

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      
      <div 
        className={`fixed inset-y-0 left-0 z-30 w-64 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out bg-gray-900 text-white`}
      >
        <Sidebar 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
      </div>

      
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <Header 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeCategory={activeCategory}
        />
        
        <MainContent activeCategory={activeCategory} />
      </div>
    </div>
  );
};

export default Dashboard;