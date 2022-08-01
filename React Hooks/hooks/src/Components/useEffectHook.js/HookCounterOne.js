import React, { useEffect, useState } from 'react'

function HookCounterOne() {

    const [count , setCount] = useState(0)
    const [name , setName] = useState('')

    //after every render after ofcourse at the initial or beginning or start but alaso runs after every update to the state
    useEffect( () => {                  //this function workd after every updatation 
        console.log("updating document title in Hook component")
        document.title = `you clicked ${count} times`
    } , [count])
    //so here as we know useEffect runs after every any change in rendering . so to solve this problem in classs computer we put the cnditiona statement
    //but in the useEffect Hook we need to use a second parameter which is an array which only includes the states or props which on change will effectively runs the above function
    //in the above function the function runs only when the count is changed
    

    return (
    <div> 
        <input value={name} onChange={ event => setName( event.target.value)}/>
      <button onClick={() => setCount( previousCount => previousCount +1)}>click {count} time to change the title</button>
    </div>
  )
}

export default HookCounterOne


//1) useEffect runs after every render
//2) useEffect is placed inside the component
//3) so we need a  way to conditionally render useEffcet to handle 1) point