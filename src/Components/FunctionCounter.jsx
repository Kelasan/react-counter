import React, {useState} from "react";

function FunctionCounter(){
    const [count, setCount] = useCount(0);

    const handleIncrease = ()=> {
        setCount(count + 1);
    };

    const handleDecrease = ()=> {
        setCount(count - 1);
    };

    return(
        <div>
            <h1>COUNT: {count}</h1>
            <button onClick = {handleIncrease}>increase</button>
            <button onClick = {handleDecrease}>decrease</button>

        </div>
    )
}

export default FunctionCounter;