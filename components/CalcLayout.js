import React, { useState } from 'react';

import CalcButton from '../components/CalcButton.js'


export default function CalcLayout(){

    const [display, setDisplay] = useState('0');

    const handleButtonClick = (value) => {
        setDisplay(display + value);
        console.log(value)
    };

    return(
        <div><center>
            <div className='flex flex-rows m-auto items-center'>
                <div>
                    <h2>
                    {display}
                    </h2> 
                </div>
                <div>
                <CalcButton type='function' value='CE' onClick={handleButtonClick}/>
                <CalcButton type='function' value='C' onClick={handleButtonClick}/>
                <CalcButton type='function' value='⬅️' onClick={handleButtonClick}/>
                <CalcButton type='operation' value='/' onClick={handleButtonClick}/>
                </div>
                <div>
                <CalcButton type='number' value='7' onClick={handleButtonClick}/>
                <CalcButton type='number' value='8' onClick={handleButtonClick}/>
                <CalcButton type='number' value='9' onClick={handleButtonClick}/>
                <CalcButton type='operation' value='X' onClick={handleButtonClick}/>
                </div>
                <div>
                <CalcButton type='number' value='4' onClick={handleButtonClick}/>
                <CalcButton type='number' value='5' onClick={handleButtonClick}/>
                <CalcButton type='number' value='6' onClick={handleButtonClick}/>
                <CalcButton type='operation' value='-' onClick={handleButtonClick}/>
                </div>
                <div>
                <CalcButton type='number' value='1' onClick={handleButtonClick}/>
                <CalcButton type='number' value='2' onClick={handleButtonClick}/>
                <CalcButton type='number' value='3' onClick={handleButtonClick}/>
                <CalcButton type='operation' value='+' onClick={handleButtonClick}/>
                </div>
                <div>
                <CalcButton type='number' value='.' onClick={handleButtonClick}/>
                <CalcButton type='number' value='0' onClick={handleButtonClick}/>
                <CalcButton type='number' value='=' onClick={handleButtonClick}/>
                <CalcButton type='operation' value='🗿' onClick={handleButtonClick}/>
                </div>
            </div></center>
        </div>
    )
}