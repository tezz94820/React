import React, { useState } from 'react'
import UseEffectHookMouse from './UseEffectHookMouse'

function MouseContainer() {
    const [ display , setDisplay] = useState(true)

  return (
    <div>
        <button onClick={ () => setDisplay(!display )}>Toggle Display</button>       {/*a button to make display state truue or false*/}
        {display && <UseEffectHookMouse/>}                                          {/* this states that RHS will run only if display is true*/}
    </div>
  )
}

export default MouseContainer
//in normal component we use componentwillunmount to cleanup all the eventlistener of UseEffectHookMouse when display is false
//but here inspite of using componentwillunmount method here we can look at componentwillunmount method and see the difference in return in event listener