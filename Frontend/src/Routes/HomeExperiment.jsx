import { min } from 'date-fns';
import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

export default function HomeExperiment() {
    const [hour,setHours]=useState(0);
    const [mini,setMini]=useState(0);
    const [seconds,setSeconds]=useState(0);

    const startTimer=useCallback(()=> {
        setInterval(()=> {
            if(seconds<60){
                setSeconds(seconds+1);
            }else{
                setSeconds(0);
                setHours(hour+1);
                setMini(mini+1)
            }
        },1000)
    },[1000])
    startTimer();
  return (
    <div>
        <h1>Your timer is started</h1>
        <p>{hour} : {mini}: {seconds}</p>
    </div>
  )
}
