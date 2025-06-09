const EmptyState = () => {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
        <h3 className="text-lg font-medium text-gray-500 mb-1">
          No tasks yet
        </h3>
        <p className="text-gray-400">
          Add your first task to get started
        </p>
      </div>
    );
  };
  
  export default EmptyState;