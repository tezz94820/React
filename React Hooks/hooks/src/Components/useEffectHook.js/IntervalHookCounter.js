import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {

    const [count , setCount] = useState(0)          //generating a state

    const tick = () => {
        setCount(  prevCount => prevCount + 1 )  //using tick function to increment count by 1
    }

    useEffect( () => {                                      
        const interval = setInterval(tick , 1000)   //call tick function every 1 sec
        return () => clearInterval(interval)        //claenup code
    } , [ count] )            //empty array signifies that only once render the interval const .and then rerender in itself and dont make replica of it
  
  
  
    return (        //jsx
    <div>
      <h2>{count}</h2>
    </div>
  )
}

export default IntervalHookCounter
