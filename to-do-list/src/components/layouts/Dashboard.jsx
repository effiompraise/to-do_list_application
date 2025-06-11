import { useTaskStore } from '../hooks/useTaskStore';
import { isOverdue } from '../../utils/dateUtils';

const Dashboard = () => {
  const tasks = useTaskStore(state => state.tasks);
  
  const stats = {
    upcoming: tasks.filter(t => new Date(t.dueDate) > new Date()).length,
    completed: tasks.filter(t => t.completed).length,
    overdue: tasks.filter(t => !t.completed && isOverdue(t.dueDate)).length
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="bg-blue-200 p-4 rounded">
        <h2 className="text-lg font-bold">Upcoming Tasks</h2>
        <p>{stats.upcoming}</p>
      </div>
      <div className="bg-green-200 p-4 rounded">
        <h2 className="text-lg font-bold">Completed Tasks</h2>
        <p>{stats.completed}</p>
      </div>
      <div className="bg-red-200 p-4 rounded">
        <h2 className="text-lg font-bold">Overdue Tasks</h2>
        <p>{stats.overdue}</p>
      </div>
    </div>
  );
};

export default Dashboard;