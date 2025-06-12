import React, { useState } from 'react';
import { Plus, Menu, Search } from 'lucide-react';
import { useTaskStore, useCategoryStore } from './hooks';
import TaskList from './components/features/tasks/TaskList';
import TaskForm from './components/features/tasks/TaskForm';
import CategoryList from './components/features/categories/CategoryList';
import Sidebar from './components/layouts/Sidebar';
import Dashboard from './components/layouts/Dashboard';

const App = () => {
  const taskStore = useTaskStore();
  const categoryStore = useCategoryStore();
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const completedTasks = taskStore.tasks.filter(task => task.completed).length;
  const totalTasks = taskStore.tasks.length;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}>
          <CategoryList
            categories={categoryStore.categories}
            activeCategory={filterCategory}
            onCategoryChange={setFilterCategory}
          />
        </Sidebar>
        
        <Dashboard>
          {/* Header */}
          <header className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Menu size={20} />
                </button>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">My Tasks</h1>
                  <p className="text-sm text-gray-600">
                    {completedTasks} of {totalTasks} tasks completed ({completionPercentage}%)
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => setShowTaskForm(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 sm:px-4 sm:py-2 rounded-full transition-colors shadow-lg hover:shadow-xl"
              >
                <Plus size={20} className="sm:mr-2" />
                <span className="hidden sm:inline">Add Task</span>
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
            </div>
          </header>
          
          {/* Search and Filters */}
          <div className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6">
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex space-x-3">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Task List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <TaskList
              tasks={taskStore.tasks}
              categories={categoryStore.categories}
              onToggle={taskStore.toggleTask}
              onDelete={taskStore.deleteTask}
              searchTerm={searchTerm}
              filterCategory={filterCategory}
              filterStatus={filterStatus}
            />
          </div>
        </Dashboard>
      </div>
      
      {/* Task Form Modal */}
      {showTaskForm && (
        <TaskForm
          onSubmit={taskStore.addTask}
          categories={categoryStore.categories}
          onClose={() => setShowTaskForm(false)}
        />
      )}
    </div>
  );
};

export default App;