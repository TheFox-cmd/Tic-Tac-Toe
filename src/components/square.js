import './square.css'
import React from 'react';

const Square = ({ value, onClick, disabled }) => {
  const getClassName = () => {
    if (value === 'O') return 'square o';
    if (value === 'X') return 'square x';
    return 'square';
  };

  return (
    <button 
      className={getClassName()} 
      onClick={onClick} 
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default Square;
