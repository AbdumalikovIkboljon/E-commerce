// components/Input.js
import React from 'react';

const Input =(({ label, type = 'text', placeholder, className, ...props }, ref) => {
  return (
    <div className={`flex flex-col`}>
      {label && <label className="mb-1 text-sm text-gray-700">{label}</label>}
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
    </div>
  );
});


export default Input;
