import React from 'react'

function FunctionClickEventHandling() {
  
    function clickHandler(){
        console.log('Button Clicked');
    }
  
    return (
    <div>
       <button onClick={clickHandler}>Click</button>     {/*in jsx attributes must be defines in camelCase */}   
       {/*so here the function passed is not the function call but the reference to the function so that it is called when the click is happened . */}
    </div>
  )
}

export default FunctionClickEventHandling
