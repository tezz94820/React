import React from 'react'

function Inline() {

    const heading = {
        fontSize : '72px',
        color : 'blue'
    }

 return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  )
 }
export default Inline
//whenever you have to pass the inline css include the styling in the object and then pass it as the attribte under the style tag in the element