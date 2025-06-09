
import React, { createContext, useContext, useReducer } from 'react';


const initialState = {
  todos: [
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
  ]
};


const TodoContext = createContext();


function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id 
            ? { ...todo, text: action.payload.text, category: action.payload.category } 
            : todo
        )
      };
    default:
      return state;
  }
}


export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

// Custom hook to use the context
export function useTodoContext() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
}