import { useEffect, useState } from "react";

function Stopwatch(){

    const[timer,setTimer]=useState(0);
    const[isRunning, setIsRunning]=useState(false);

    useEffect(()=>{
        let interval;
        if(isRunning){
            interval=setInterval(()=>{setTimer((prev)=>prev+1)},1000); 
        }else{
            clearInterval(interval);

        }
        return (()=>{
            clearInterval(interval);
        })

    },[isRunning ])
   
    return (
       <div>
        <h1>StopWatch</h1>
        <h2>Time:{timer} </h2>
        <button onClick={()=>setIsRunning((prev)=>!prev)}>{isRunning?"Stop":"Start"}</button>
        <button onClick={()=>{
            setTimer(0);
            setIsRunning(false);
        }}>reset</button>
        </div>
    )
}


export default Stopwatch;