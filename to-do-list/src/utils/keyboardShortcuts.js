export const useKeyboardShortcuts = (callbacks) => {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      
      if ((event.ctrlKey || event.metaKey) && event.key === 'n') {
        event.preventDefault();
        callbacks.onNewTask?.();
      }
      
    
      if (event.key === 'Escape') {
        callbacks.onEscape?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [callbacks]);
};