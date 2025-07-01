import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  disabled = false 
}) => {
  const baseClasses = "w-full py-4 px-6 rounded-full font-semibold text-center transition-all duration-200 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg",
    answer: "bg-white text-gray-800 border-2 border-gray-200 hover:border-blue-500 hover:text-blue-500 hover:shadow-md"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;