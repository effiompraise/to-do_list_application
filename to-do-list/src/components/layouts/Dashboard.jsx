import React from 'react';

const Dashboard = ({ children }) => {
  return (
    <div className="flex-1 flex flex-col min-h-0">
      {children}
    </div>
  );
};

export default Dashboard;