import React, { createContext, useReducer } from "react";

export const MyContext = createContext()

const reducer = (state, action) => {
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

const GlobalContext = ({ children }) => {

    const initialState = { count: 0 }
    const [state, dispatch] = useReducer(reducer, initialState)



    return (
        <MyContext.Provider value={{ state, dispatch }}>{children}</MyContext.Provider>
    )
}



export default GlobalContext