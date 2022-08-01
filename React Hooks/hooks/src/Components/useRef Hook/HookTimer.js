import React, { useState,useEffect, useRef } from 'react'

function HookTimer() {

    const [timer , setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect( () => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1 )
        }, 1000);

        return( () =>{
            clearInterval(intervalRef.current)                     //cleanUp code is always written in return function which runs same as componentwillunmount
        })
    } , [])

  return (
    <div>{timer}<br />
    <button onClick={() => clearInterval(intervalRef.current)}>stop Hook Timer</button>
    </div>
  )
}

export default HookTimer
//apart from using useRef to access dom nodes it can even be used to store any mutable value
//it is used to make a container which store some value which are mutated in dom and even this does not get affected by the change in any other states oe props