import React, { useReducer } from 'react'

const initialState = {          //so here we made the initialState as an object i.e we made the state as an object which can help us to store multiple values in one state by specifing the property to the object
    firstCounter : 0 , 
    secondCounter : 10
}
const reducer = (state , action) => {
    switch(action.type){                //here acion has also become an object as we introduced two properties type and value to it.
        case 'increment' : return {...state ,  firstCounter : state.firstCounter + action.value}                //here in all we used spread operator to get the updated values of the previos state as it is.it is used when multiple state properties are there
        case 'decrement' : return { ...state , firstCounter : state.firstCounter - action.value}
        case 'increment2' : return { ...state , secondCounter : state.secondCounter + action.value}
        case 'decrement2' : return { ...state , secondCounter : state.secondCounter - action.value}
        case 'reset' : return initialState
        default : return state
    }
} 

function CounterTwo() {

    const [count , dispatch] = useReducer(reducer , initialState)
    //dispatch method allows us to access the action parameter of reducer function

  return (
    <div>
      <div>firstCounter = {count.firstCounter}</div>
      <div>secondCounter = {count.secondCounter}</div>

      <button onClick={ () => dispatch({type : 'increment' , value : 1})}>Increment</button>
      <button onClick={ () => dispatch({type : 'decrement' , value : 1})}>Decrement</button>

      <button onClick={ () => dispatch({type : 'increment' , value : 5})}>Increment by 5</button>
      <button onClick={ () => dispatch({type : 'decrement' , value : 5})}>Decrement by 5</button>

      <button onClick={ () => dispatch({type : 'increment2' , value : 1})}>Increment secondCounter</button>
      <button onClick={ () => dispatch({type : 'decrement2' , value : 1})}>Decrement secondCounter</button>
      <button onClick={ () => dispatch({type :'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo
//1)so using useReducer we can handle mutiple values in a single state by making it an object
//2) making the action parameter as an  object we can deal with multiple work done on a single state