import useTodoStore from '../../store/todoStore';

type TodoStatsProps = {
  activeCategory: string;
}
const TodoStats = ({ activeCategory }: TodoStatsProps) => {
  const todos = useTodoStore((state) => state.todos);
  
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  return (
    <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg">
      <div className="text-center">
        <p className="text-2xl font-bold">{totalTodos}</p>
        <p className="text-gray-500">Total</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold text-green-500">{completedTodos}</p>
        <p className="text-gray-500">Completed</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold text-yellow-500">{pendingTodos}</p>
        <p className="text-gray-500">Pending</p>
      </div>
    </div>
  );
};

export default TodoStats;