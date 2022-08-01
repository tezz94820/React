import React from 'react'
import { useState } from 'react'

function UseStateWithPreviousState() {

    const initialCount = 0
    const [ count , setCount] = useState(initialCount)

    //always  use the previousState parameter which has the valueof the previous state inspite og using the count  .
    const incrementFive = () => {
        for(let i=0;i<5;i++){
            //setCount(count + 1)         //this will not worl and it just increments the counter by 1 inspite of runninf the loop five timesS
            setCount( previousState => previousState + 1)       //this works
        }
    }
  return (
    <div>
      Count : {count} <br/>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>                                {/*dont use this*/}
      <button onClick={() => setCount(previousState => previousState - 1)}>Decrement</button>       {/*try to use this method*/} 
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default UseStateWithPreviousState
