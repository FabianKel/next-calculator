import React from 'react';

export default function CalcButton({ type, value, onClick }){

    const handleClick = () => {
        onClick(value);
      };
    
      const getButtonStyle = () => {
        switch (type) {
            case 'number':
                return { backgroundColor: 'lightblue' };
            case 'operation':
                return { backgroundColor: 'orange' };
            case 'function':
                return { backgroundColor: 'green' };
            default:
                return { backgroundColor: 'gray' };
        }
      };
    
      return (
        <button style={getButtonStyle()} onClick={handleClick}>
          {value}
        </button>
      );
}