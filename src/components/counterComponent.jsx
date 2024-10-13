import { useState } from "react"

const CounterComponent = () =>{
    const [count, setCount] = useState(13);    
    
    console.log("hello", count);
    
    return(
        <>
        <p>Count - {count}</p>
        <p>Value is {( count % 2 === 0) ? "Even" : "Odd" }</p>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    )
}
export default CounterComponent;