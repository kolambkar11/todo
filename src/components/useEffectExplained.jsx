import { useEffect, useState } from "react"

const UseEffectExplained = () => {

    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("this is mounting");
        
    },[])
    useEffect(()=>{
        console.log("count got updated");
        
    },[count])
    return(
        <>
        <p>this is useEffect explained.</p>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
        </>
    )
}

export default UseEffectExplained