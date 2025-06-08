import React from 'react';

type ProgressRingProps = {
  progress: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  label?: string;
};

const ProgressRing = ({ 
  progress, 
  size = 60, 
  strokeWidth = 6,
  color = '#3b82f6',
  bgColor = '#e5e7eb',
  label 
}: ProgressRingProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          
          <circle
            stroke={bgColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
         
          <circle
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-500 ease-in-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-gray-700">
            {progress}%
          </span>
        </div>
      </div>
      {label && (
        <span className="mt-1 text-xs font-medium text-gray-500 capitalize">
          {label}
        </span>
      )}
    </div>
  );
};

export default ProgressRing;