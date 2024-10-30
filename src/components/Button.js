// components/Button.js
import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'primary', ...props }) => {
//   const baseStyles = 'px-4 py-2 rounded-md font-medium focus:outline-none transition-colors duration-200';
//   const variantStyles = {
    // primary: 'bg-blue-500 text-white hover:bg-blue-600',
    // secondary: 'bg-gray-300 text-black hover:bg-gray-400',
    // danger: 'bg-red-500 text-white hover:bg-red-600',
//   };

  return (
    <button
      onClick={onClick}
      className={` ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
