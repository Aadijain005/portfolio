import React , { useEffect, useState } from "react";

const HookEffect = () =>{
    const [count,setCount] = useState(0);

    useEffect(() =>{
        console.log("Count Updated : $(count)");

        return() =>{
            console.log("Cleanup on Count Change");
        };
    } , [count]);

    return (
        <div>
          <h1>Count : {count}</h1>
          <button onClick = {() => setCount(count+1)}>Increment</button>
          <button onClick = {() => setCount(count-1)}>Decrement</button>
          </div>
    );
};
export default HookEffect;