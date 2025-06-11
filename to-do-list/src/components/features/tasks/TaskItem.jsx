import { useTaskStore } from '../../hooks/useTaskStore';
import { formatDate, isOverdue } from '../../utils/dateUtils';

const TaskItem = ({ task }) => {
  const [tasks, updateTask, deleteTask] = useTaskStore(state => [state.tasks, state.updateTask, state.deleteTask]);

  const handleToggleComplete = () => {
    updateTask(task.id, { completed: !task.completed });
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <li className="bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-start">
        <div className="flex items-start">
          <input
            id={`task-${task.id}`}
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleComplete}
            className="mr-2 mt-1"
          />
          <label 
            htmlFor={`task-${task.id}`}
            className={`flex-1 ${
              task.completed ? 'line-through text-gray-500' : 'font-medium'
            }`}
          >
            {task.title}
          </label>
        </div>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-1">
        Due: {formatDate(new Date(task.dueDate))}
        {isOverdue(task.dueDate) ? ' (Overdue)' : ''}
      </p>
    </li>
  );
};

export default TaskItem;