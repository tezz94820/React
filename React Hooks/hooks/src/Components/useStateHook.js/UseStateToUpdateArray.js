import React from 'react'
import { useState } from 'react'

function UseStateToUpdateArray() { 
    const [items , setItems] = useState([])     //passed an array

    const addItem = () => {             
        setItems([...items , {          //spread operator to call all the items again
            id : items.length ,
            value : Math.floor(Math.random() *10) + 1
        }])
    }
    
  return (
      <div>
        <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map( item => <li key={item.id}>{item.value}</li>)}       {/*.map enables us to modify the array withou affescting it . */}
      </ul>
    </div>
  )
}
  
export default UseStateToUpdateArray


//summary of use state
//1) the use State Who Lets you add state to functional components
//2) in classes the state is always an object
//3) with the new state hook the state doesn't have to be an object
//4) the use State who returns an array with the two elements
//5) the first element is the current value of the state and the second element is the state sector function
//6) new state value depends on the previous state value you can pass the function to setter function
//7) when dealing with the objects or arrays always make sure to spread your state variable and then call the setter function