import React from 'react';
import TodoItem from './TodoItem';
import EmptyState from '../UI/EmptyState';
import useTodoStore from '../../store/todoStore';

type TodoListProps = {
  activeCategory: string;
};

const TodoList = ({ activeCategory }: TodoListProps) => {
  const todos = useTodoStore((state) => state.todos);
  
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