import React from 'react';

const ProgressRing = ({ 
  progress, 
  size = 60, 
  strokeWidth = 6,
  color = 'indigo-500',
  bgColor = 'gray-200'
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedProgress = Math.min(100, Math.max(0, progress));
  const offset = circumference - (clampedProgress / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          
          <circle
            stroke="currentColor"
            className={`text-${bgColor}`}
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          
          <circle
            stroke="currentColor"
            className={`text-${color} transition-all duration-500 ease-in-out`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-gray-700">
            {clampedProgress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressRing;
