import { MyContext } from "./MyContext";
import React, { useState } from "react";

export default function MyContextProvider({children}){
    const [counter, setCounter] = useState(0);
    return (
        <MyContext.Provider value={{counter,setCounter}}>
            {children}
        </MyContext.Provider>
    )
}