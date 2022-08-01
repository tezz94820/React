import React, { useEffect, useRef } from 'react'

function FocusInput() {

const inputRef = useRef(null)       //useRef has a paramter of initial value
useEffect( () => {
    inputRef.current.focus() 
} , [])         //leaving the array empty to execute the useEffect only once same as componentWillMount

  return (
    <div>
        <input ref={inputRef} type='text'></input>
    </div>
  )
}

export default FocusInput
//useRef is used to imperatively access the dom nodes created within the components and then we can play with it 