import React from 'react'
import { useSelector,  useDispatch } from 'react-redux'
import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from './counterSlice';
import { useState } from 'react';


const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);

    
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

  return (
      <section>
          <h1>COUNTER APP</h1>
          <p className='count'>{count}</p>
          <div className='counter-buttons'>
              <button onClick={() => dispatch(increment())}
              className='counter-buttons button'>+</button>
              <button onClick={() => dispatch(decrement())}
              className='counter-buttons button'>-</button>
              
          </div>
          <input type="text"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(e.target.value)}
          
          className='counter-value'/>
          <div className='act-button'>
              <button onClick={() => dispatch(incrementByAmount(addValue))}
              className='increment'>Add Amount</button>
              <button onClick={resetAll} className='reset'>Reset</button>
          </div>
   </section>
  )
}

export default Counter
