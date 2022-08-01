import React from 'react'

function Button({clickHandler , children}) {
    console.log(`${children} button`)
  return <button onClick={clickHandler}>{children}</button>
}

export default React.memo(Button) 