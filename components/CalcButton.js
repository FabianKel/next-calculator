import React from 'react';

export default function CalcButton({ type, value, onClick }) {
    const handleClick = () => {
        onClick(value);
    };

    const getButtonStyle = () => {
        switch (type) {
            case 'number':
                return { width: '100px', height: '70px', backgroundColor: '#5B6A7D' };
            case 'operation':
                if (value === "=") {
                    return { width: '200px', height: '70px', backgroundColor: '#FC346F' };
                } else {
                    return { width: '100px', height: '70px', backgroundColor: '#5B6A7D' };
                }
            case 'function':
                return { width: '100px', height: '70px', backgroundColor: '#374353' };
            default:
                return { width: '100px', height: '70px', backgroundColor: '#333A42' };
        }
    };

    return (
        <button className="font-montserrat font-bold" style={getButtonStyle()} onClick={handleClick}>
            {value}
        </button>
    );
}