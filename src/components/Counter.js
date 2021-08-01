import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Counter  = () =>{

    const counter = useSelector(state => state.counter);
    const dispatch =  useDispatch();

    const incrementHandler = () => {
        dispatch({type: 'increment'})
    }

    const decrementHandler = () => {
        dispatch({type: 'decrement'})
    }

    
    const resetHandler = () => {
        dispatch({type: 'reset'})
    }


    return(
        <div>
            <h1>Counter: { counter }</h1>
            <button onClick={incrementHandler} className="btn btn-primary">Increment</button>
            <button onClick={decrementHandler} className="btn btn-danger">Decrement</button>
            <button onClick={resetHandler} className="btn btn-warning">Reset</button>
        </div>
    )
}

export default Counter;