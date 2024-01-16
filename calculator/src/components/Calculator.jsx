import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [oldResult, setOldResult] = useState(0);
  const [operator, setOperator] = useState();
  const round = 6;

  function inputNum(e){
    var input = e.target.value;

    if(result === 0){
      setResult(input);
    }
    else{
      setResult(result + input);
    }
  }

  function clear(e){
    setResult(0);
  }

  function percentage(e){
    setResult(result / 100);
  }

  function changeSignal(e){
    if(result > 0){
      setResult(-result);
    }
    else{
      setResult(result*(-1));
    }
  }

  function operatorHandler(e){
    let inputOperator = e.target.value;
    setOperator(inputOperator);
    setOldResult(result);
    setResult(0);
  }

  function calculate(e){
    let num;
    if(operator === '/'){
      num = parseFloat(oldResult) / parseFloat(result);
    } else if(operator === '*'){
      num = parseFloat(oldResult) / parseFloat(result);
    } else if(operator === '-'){
      num = parseFloat(oldResult) / parseFloat(result);
    } else if(operator === '+'){
      num = parseFloat(oldResult) / parseFloat(result);
    }
    setResult(Math.round(num * 10**round) / (10**round));
  }
  return (
    <div>
      <Box m={20}/>
      <Container maxWidth="xs">
          <div className='wrapper'>
            <Box m={6}/>
            <h1 className='result'>{result}</h1>
            <button className='right-top-buttons' onClick={clear}>AC</button>
            <button className='right-top-buttons' onClick={changeSignal}>+/-</button>
            <button className='right-top-buttons' onClick={percentage}>%</button>
            <button className='right-top-buttons' onClick={operatorHandler} value={'/'}>/</button>

            <button className='numeric-buttons' onClick={inputNum} value={7}>7</button>
            <button className='numeric-buttons' onClick={inputNum} value={8}>8</button>
            <button className='numeric-buttons' onClick={inputNum} value={9}>9</button>
            <button className='right-top-buttons' onClick={operatorHandler} value={'*'}>*</button>
            
            <button className='numeric-buttons' onClick={inputNum} value={4}>4</button>
            <button className='numeric-buttons' onClick={inputNum} value={5}>5</button>
            <button className='numeric-buttons' onClick={inputNum} value={6}>6</button>
            <button className='right-top-buttons' onClick={operatorHandler} value={'-'}>-</button>

            <button className='numeric-buttons' onClick={inputNum} value={1}>1</button>
            <button className='numeric-buttons' onClick={inputNum} value={2}>2</button>
            <button className='numeric-buttons' onClick={inputNum} value={3}>3</button>
            <button className='right-top-buttons' onClick={operatorHandler} value={'+'}>+</button>

            <button className='numeric-buttons zero' onClick={inputNum} value={0}>0</button>
            <button className='numeric-buttons' onClick={inputNum} value={'.'}>.</button>
            <button className='right-top-buttons'onClick={calculate}>=</button>
          </div>
      </Container>
    </div>
  )
}
