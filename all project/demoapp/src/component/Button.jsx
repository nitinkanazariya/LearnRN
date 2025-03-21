import React from 'react';


export const Button = ({ label, onClick, className = "", bgempty }) => {
  return (
    <button
      onClick={onClick}
      className={bgempty ?
        `px-4 py-2 text-[14px] font-semibold text-black hover:font-bold ${className}` :
        `px-4 py-2 text-[14px] font-semibold rounded-[100px] text-white bg-primary hover:bg-secondary focus:outline-none ${className}`}
    >
      {label}
    </button>
  );
};
