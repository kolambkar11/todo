import { useEffect, useState } from "react"

const StopWatch = () => {

    const [time, setTime] = useState(0)
    useEffect(()=>{
        console.log("timer updated");
        // const timer = setInterval(()=>setTime(time+1), 1000)
        // console.log(timer);
        
    },[time])
    return(
        <>
        <p>StopWatch</p>
        <p>Current Time is {time}</p>
        </>
    )
}

export default StopWatch