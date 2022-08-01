import React, { useReducer } from 'react'

const initialState = 0
//takes the initial state and returns the new state and therefore can be used as useState()
//before before returning the new state some action has to be performed an that is given as action parameter in reducer method
const reducer = (state , action) => {             
    switch(action){
        case 'increment' : return state + 1
        case 'decrement' : return state - 1
        case 'reset' : return initialState
        default : return state
    }
} 

function CounterR() {

    const [count , dispatch] = useReducer(reducer , initialState)
    //dispatch method allows us to access the action parameter of reducer function

  return (
    <div>
      <div>count = {count}</div>
      <button onClick={ () => dispatch('increment')}>Increment</button>
      <button onClick={ () => dispatch('decrement')}>Decrement</button>
      <button onClick={ () => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default CounterR
//
//1)it is an alternative to userState hook
//2) useState is built using useReducer