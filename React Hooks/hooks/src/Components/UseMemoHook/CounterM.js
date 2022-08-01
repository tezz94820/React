import React, { useMemo, useState } from 'react'

function CounterM() {

    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)

    const incrementOne = () => {
        setcounterOne(prevCounterOne => prevCounterOne + 1)
    }

    const incrementTwo = () => {
        setcounterTwo( prevCounterTwo => prevCounterTwo + 1)
    }

    const isEven = useMemo( () => {
        let i=0
        while(i<2000000000) i++
        return counterOne % 2 === 0
    
    } , [counterOne] ) 


  return (
    <div>
        <button onClick={incrementOne}>Count one - {counterOne} /
            <span> {isEven ? 'Even' : 'Odd'} </span>
        </button>
        <button onClick={incrementTwo}>Count Two - {counterTwo} </button>
    </div>
  )
}

export default CounterM

//use callbacks and usememos are same but if you want to cache a function use usecallbacks and if you need to cache a result of an invoked function then use usememos