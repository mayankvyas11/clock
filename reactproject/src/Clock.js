import { useState , useEffect } from "react";
const Clock = ({initialTime})=>{
  const [times , setTimes] = useState(initialTime)
  useEffect(()=>{
   let timer;
   if(times>0)
   {
     timer = setInterval(() => {
      setTimes((prev=>
       prev=prev-1)
      );
    }, 1000);
   }
   
   return () => {
    clearInterval(timer);
  };
  },[times]);

  const FormatTIme = (timeInSeconds)=>{
   const minutes = Math.floor(timeInSeconds/60);
   const seconds = timeInSeconds%60;
   return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;                   
  }



return (
  <div>
    <h1>the timer clock</h1>
    <h2>{FormatTIme(times)}</h2>
  </div>
)
}

export default Clock;