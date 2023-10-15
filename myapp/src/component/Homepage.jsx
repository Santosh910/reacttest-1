import React from "react";
import { useContext } from "react";
import { MyContext } from "./context/GlobalContext";

const Homepage = () => {

    const { state, dispatch } = useContext(MyContext)

    return(
        <div>
            <h1>counter : {state.count}</h1>
            <button onClick={() => dispatch({type:"INCR"})}>+</button>
            <button onClick={() => dispatch({type: "DECR"})} >-</button>
            <button onClick={() => dispatch({type:"RESET"})}>reset</button>
        </div>
    )
}

export default Homepage
