import React from 'react';
import { ProgressBarProps } from '../types';

const ProgressBar: React.FC<ProgressBarProps> = ({ currentPage, totalPages }) => {
  const progress = (currentPage / totalPages) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="relative h-2 bg-gray-200">
        <div 
          className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="px-4 py-2 text-center">
        <span className="text-sm text-gray-600 font-medium">
          Pergunta {currentPage} de {totalPages}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;