import React, { useState } from 'react';
import CalcButton from './CalcButton.js';

export default function CalcLayout() {
    const [display, setDisplay] = useState('0');
    const [firstOperand, setFirstOperand] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

    const handleButtonClick = (value) => {
        if (['+', '-', 'X', '/'].includes(value)) {
            handleOperation(value);
        } else if (value === '=') {
            handleEqual();
        } else if (value === 'CE') {
            handleClear();
        } else if (value === 'C') {
            handleReset();
        } else if (value === '⌫') {
            handleBackspace();
        } else {
            handleNumber(value);
        }
    };

    const handleNumber = (number) => {
        if (waitingForSecondOperand) {
            setDisplay(number);
            setWaitingForSecondOperand(false);
        } else {
            setDisplay(display === '0' ? number : display + number);
        }
    };

    const handleOperation = (nextOperation) => {
        const inputValue = parseFloat(display);

        if (firstOperand == null) {
            setFirstOperand(inputValue);
        } else if (operation) {
            const result = performCalculation(operation, firstOperand, inputValue);
            setDisplay(String(result));
            setFirstOperand(result);
        }

        setOperation(nextOperation);
        setWaitingForSecondOperand(true);
    };

    const performCalculation = (operation, firstOperand, secondOperand) => {
        switch (operation) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case 'X':
                return firstOperand * secondOperand;
            case '/':
                return firstOperand / secondOperand;
            default:
                return secondOperand;
        }
    };

    const handleEqual = () => {
        const inputValue = parseFloat(display);

        if (operation && !waitingForSecondOperand) {
            const result = performCalculation(operation, firstOperand, inputValue);
            setDisplay(String(result));
            setFirstOperand(null);
            setOperation(null);
            setWaitingForSecondOperand(false);
        }
    };

    const handleClear = () => {
        setDisplay('0');
    };

    const handleReset = () => {
        setDisplay('0');
        setFirstOperand(null);
        setOperation(null);
        setWaitingForSecondOperand(false);
    };

    const handleBackspace = () => {
        setDisplay(display.slice(0, -1) || '0');
    };

    return (
        <div>
            <center>
                <div className='flex flex-row m-auto items-center'>
                    <div>
                        <h2 className="font-montserrat font-bold">{display}</h2>
                    </div>
                    <div>
                        <CalcButton type='function' value='CE' onClick={handleButtonClick} />
                        <CalcButton type='function' value='C' onClick={handleButtonClick} />
                        <CalcButton type='function' value='⌫' onClick={handleButtonClick} />
                        <CalcButton type='operation' value='/' onClick={handleButtonClick} />
                    </div>
                    <div>
                        <CalcButton type='number' value='7' onClick={handleButtonClick} />
                        <CalcButton type='number' value='8' onClick={handleButtonClick} />
                        <CalcButton type='number' value='9' onClick={handleButtonClick} />
                        <CalcButton type='operation' value='X' onClick={handleButtonClick} />
                    </div>
                    <div>
                        <CalcButton type='number' value='4' onClick={handleButtonClick} />
                        <CalcButton type='number' value='5' onClick={handleButtonClick} />
                        <CalcButton type='number' value='6' onClick={handleButtonClick} />
                        <CalcButton type='operation' value='-' onClick={handleButtonClick} />
                    </div>
                    <div>
                        <CalcButton type='number' value='1' onClick={handleButtonClick} />
                        <CalcButton type='number' value='2' onClick={handleButtonClick} />
                        <CalcButton type='number' value='3' onClick={handleButtonClick} />
                        <CalcButton type='operation' value='+' onClick={handleButtonClick} />
                    </div>
                    <div>
                        <CalcButton type='number' value='.' onClick={handleButtonClick} />
                        <CalcButton type='number' value='0' onClick={handleButtonClick} />
                        <CalcButton type='operation' value='=' onClick={handleButtonClick} />
                    </div>
                </div>
            </center>
        </div>
    );
}
