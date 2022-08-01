import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button>        //we cam use this if we just want to call greetHandler withot passing any parameters */}
        <button onClick={ () => props.greetHandler('child')}>Greet Parent</button>  {/*use this is you want to pass the parameters*/}

    </div>
  )
}

export default ChildComponent


//here we are calling parent component methods from child component evnt handling. 