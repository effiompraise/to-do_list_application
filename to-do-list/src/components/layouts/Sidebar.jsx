import { useTaskStore, useCategoryStore } from '../hooks';
import { DndContext, MouseSensor, TouchSensor, closestCenter } from '@hello-pangea/dnd';

const Sidebar = () => {
  const [tasks, moveTask] = useTaskStore(state => [state.tasks, state.moveTask]);
  const categories = useCategoryStore(state => state.categories);
  
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    moveTask(active.id, over.id, over.parent.id);
  };

  return (
    <DndContext
      sensors={[new MouseSensor(), new TouchSensor()]}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li 
              key={index}
              className="bg-gray-700 p-2 rounded cursor-pointer hover:bg-gray-600"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </DndContext>
  );
};

export default Sidebar;