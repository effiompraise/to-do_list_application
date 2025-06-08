import React from 'react';
import TodoForm from '../Todo/TodoForm';
import TodoList from '../Todo/TodoList';
import TodoStats from '../Todo/TodoStats';
import Card from '../UI/Card';
import { Category } from '../../store/todoStore';

type MainContentProps = {
  activeCategory: Category;
};

const MainContent = ({ activeCategory }: MainContentProps) => {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-to-br from-white to-indigo-50 border border-indigo-100">
              <TodoForm activeCategory={activeCategory} />
            </Card>
            
            <Card title="Tasks">
              <TodoList activeCategory={activeCategory} />
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card title="Statistics">
              <TodoStats activeCategory={activeCategory} />
            </Card>
            
            <Card title="Quick Actions">
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-indigo-100 text-indigo-700 py-3 rounded-lg font-medium hover:bg-indigo-200 transition-colors">
                  Complete All
                </button>
                <button className="bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Clear Completed
                </button>
                <button className="bg-green-100 text-green-700 py-3 rounded-lg font-medium hover:bg-green-200 transition-colors col-span-2">
                  Export Tasks
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;