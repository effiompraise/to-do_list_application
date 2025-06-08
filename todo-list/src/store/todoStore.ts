import { create } from 'zustand';

export type Category = 'health' | 'education' | 'group-work' | 'food' | 'lifestyle' | 'all';

type Todo = {
  id: string;
  text: string;
  completed: boolean;
  category: Category;
};

type TodoStats = {
  total: number;
  completed: number;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (text: string, category: Category) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  updateCategory: (id: string, category: Category) => void;
  getCategoryStats: () => Record<Category, TodoStats>;
};

const useTodoStore = create<TodoStore>((set, get) => ({
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
    },
    {
      id: '6',
      text: 'Research new recipes',
      completed: false,
      category: 'food'
    }
  ],
  addTodo: (text, category) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now().toString(),
          text,
          completed: false,
          category,
        },
      ],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  updateTodo: (id, text) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      ),
    })),
  updateCategory: (id, category) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, category } : todo
      ),
    })),
  getCategoryStats: () => {
    const stats: Record<Category, TodoStats> = {
      'all': { total: 0, completed: 0 },
      'health': { total: 0, completed: 0 },
      'education': { total: 0, completed: 0 },
      'group-work': { total: 0, completed: 0 },
      'food': { total: 0, completed: 0 },
      'lifestyle': { total: 0, completed: 0 }
    };
    
    get().todos.forEach(todo => {
      
      stats[todo.category].total++;
      if (todo.completed) stats[todo.category].completed++;
      
      
      stats['all'].total++;
      if (todo.completed) stats['all'].completed++;
    });
    
    return stats;
  }
}));

export default useTodoStore;