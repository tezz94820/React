import React from 'react'
import { useState } from 'react'

function HookCounter() {
    const [count , setCount] = useState(0)          //here useState is a function where the parameter is the initial value of count variable and we used destructuring of array to establish the relation
    //here count is the variable initilised to 0 . and setCount is the function to handle related functions to that state or variable.
  return (
    <div>
      <button onClick={() => setCount(count +1)}>count {count}</button>     {/*here we need to use arrow function ,if not used then it is just a function call . it is just like calling a button without clicking it  */}
    </div>
  )
}

export default HookCounter


//RULES
//1) always call hooks at the top level
//2) dont call hooks at loops,conditions and nesed functions
//3) only call hooks from React Functions  , call them from within react functional components and not just any regular javascript function.