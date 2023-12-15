{/* import React from 'react' */}
import { useState } from 'react' 
import "./Calculator.css"

const Calculator = () => {
    const [currentValue, SetCurrentValue] = useState('0')
    const [pendingOperation, setPendingOperation] = useState(null)
    const [pendingValue, setPendingValue] = useState(null)
    const [completeOperation, setCompletOperation] = useState('')

    const keypadNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operations = ['+', '-', '*', '/'];

    const handleClick = (val) => {
        SetCurrentValue(prevValue => {
            if(prevValue === '0') {
                return val
            } else {
                return prevValue + val
            }    
        })
    }
    
  return (
    <div className='calculator'>
    <div className="complete-operation">{completeOperation}</div>
    <div className="display">{currentValue}</div>
    <div className="buttons">
        <button>AC</button>
        {keypadNumbers.map((num) => (
            <button key={num} onClick={() => handleClick(num)}>
                {num}
                </button>
        ))}
        {operations.map((operation) => (
            <button key={operation}>{operation}</button>
        ))}
        <button>=</button>
    </div>
  </div>
  )
}

export default Calculator
