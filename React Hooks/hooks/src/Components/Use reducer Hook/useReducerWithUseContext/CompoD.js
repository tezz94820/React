import React, { useContext } from 'react'
import { CountContext } from '../../../App'

function CompoD() {

  const countContext = useContext(CountContext)
  return (
    <div>
      <div>CompoD</div>
      <button onClick={ () => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={ () => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={ () => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default CompoD