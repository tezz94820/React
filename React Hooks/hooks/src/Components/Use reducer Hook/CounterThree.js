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

function CounterThree() {

    const [count , dispatch] = useReducer(reducer , initialState)
    const [count2 , dispatch2] = useReducer(reducer , initialState)
    //dispatch method allows us to access the action parameter of reducer function

  return (
    <div>
      <div>count = {count}</div>
      <button onClick={ () => dispatch('increment')}>Increment</button>
      <button onClick={ () => dispatch('decrement')}>Decrement</button>
      <button onClick={ () => dispatch('reset')}>Reset</button>

      <div>count2 = {count2}</div>
      <button onClick={ () => dispatch2('increment')}>Increment</button>
      <button onClick={ () => dispatch2('decrement')}>Decrement</button>
      <button onClick={ () => dispatch2('reset')}>Reset</button>
    </div>

    
    
  )
}

export default CounterThree
// 1) if the same work is done by 2 different useReducers just give them the same reducer method and initialState
//1)also is a good idea to have multiple useReducer hooks rather than havinf 2 properties in a same hook object.just as we did in CounterTwo.js