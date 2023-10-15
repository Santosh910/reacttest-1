import React, { useReducer } from "react";

const reducer = (state,action) => {
    switch (action.type) {
        case "INCR":
            return { count: state.count + 1 }
        case "DECR":
            return { count: state.count - 1 }
        case "RESET":
            return { count: 0 }
        default:
            return state;
    }
}

 
const CounterReducer =() =>{

    const initialState = { count: 0 }
    const [state, dispatch] = useReducer(reducer, initialState);

    function increment() {
        dispatch({type:"INCR"})
    }

    function decrement() {
        dispatch({type:"DECR"})
    }

    function reset() {
        dispatch({type:"RESET"})
    }



    return(
        <div>
            <h1>counter : {state.count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterReducer