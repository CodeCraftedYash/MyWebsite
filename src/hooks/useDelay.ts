import { useEffect } from "react";

export const useDelay = (time:number,cb:()=> void) => {
 //takes a delay count and a callback function to fire that function within that delay
 const delay = time*1000;
 useEffect(()=>{
    const timeout = setTimeout(()=>{
        cb();
    },delay);
    return () => clearTimeout(timeout);
 }, [delay,cb]);
}