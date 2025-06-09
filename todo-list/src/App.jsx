import React from 'react';
import Dashboard from './components/Dashboard';
import { TodoProvider } from './store/TodoContext';
import './App.css'

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-50">
        <Dashboard />
      </div>
    </TodoProvider>
  );
}

export default App;