import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      
      <Sidebar 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        sidebarOpen={sidebarOpen}
      />
      
      
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      
      <div className="flex-1 flex flex-col overflow-hidden">
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