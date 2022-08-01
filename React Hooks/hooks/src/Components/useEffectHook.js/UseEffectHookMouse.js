import React, { useEffect, useState } from 'react'

function UseEffectHookMouse() {

    const [ x , setX] = useState()
    const [ y , setY] = useState()

    const logMousePosition = e => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect( () => {
        console.log('useEffect called by hook')
        window.addEventListener('mousemove' , logMousePosition)

        return () => {
          console.log('component unmounting code')
          window.removeEventListener('mousemove' , logMousePosition)
        }
    } , []) //so by using this empty array weare saying that react thisfunction does not depend anything but call it just once just alike in componentDidMount
    //return staement in useEffect Hook species the cleanUp code for all the functionalities of a component when the same component is removed
    //here in MouseContainer we specified the toggle button on clickeing it the display becomes false and useEffectHookMouse tag is removed .so after removing the tag we must remove the eventListener for the same .so it is handled in the retun statement of useEffect Hook.
    //this same thing is done in class component in componentwillUnmount method


  return (
    <div>
        x - {x} and Y - {y}
    </div>
  )
}

export default UseEffectHookMouse
//use empty array to do the render part only once