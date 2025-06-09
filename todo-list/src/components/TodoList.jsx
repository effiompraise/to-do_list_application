import React from 'react';
import TodoItem from './TodoItem';
import EmptyState from './EmptyState';

const TodoList = ({ activeCategory }) => {
  // In a real app, this would come from Zustand store
  const todos = [
    {
      id: '1',
      text: 'Morning meditation',
      completed: false,
      category: 'health'
    },
    {
      id: '2',
      text: 'Read React documentation',
      completed: true,
      category: 'education'
    },
    {
      id: '3',
      text: 'Team meeting at 2 PM',
      completed: false,
      category: 'group-work'
    },
    {
      id: '4',
      text: 'Meal prep for the week',
      completed: false,
      category: 'food'
    },
    {
      id: '5',
      text: '30-minute jog',
      completed: false,
      category: 'health'
    }
  ];
  
  const filteredTodos = activeCategory === 'all' 
    ? todos 
    : todos.filter(todo => todo.category === activeCategory);

  return (
    <div className="mt-4">
      {filteredTodos.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-3">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;