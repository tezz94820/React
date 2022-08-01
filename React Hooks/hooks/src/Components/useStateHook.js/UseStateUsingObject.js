import React, { useState } from 'react'

function UseStateUsingObject() {
    const [name , setName] = useState({firstName : '' , lastName : ''})         //useState parameter can be object , a number , booleanor even an array

    return (
    <div>
      <form>
          <input type="text" placeholder='First Name' value={name.firstName} 
          onChange={ event => setName({ ...name , firstName : event.target.value})} 
          />
          <input type="text" placeholder='Last Name' value={name.lastName} 
          onChange={ event => setName({...name , lastName : event.target.value})}            
          />    
            {/*so while using the code without spread operator we see that the when we write firstname , the lastname property of object just disappersrs from it .so we write the code with the spread operator(...name)*/}
            {/*spread operator (...name) says "just make the replica of whole name object first and then only update the lastName"*/}
            {/*the setter function here setName does not automatically merge object and show it . we have to it manually by spread operator   */}
          <h2>First Name : {name.firstName}</h2>
          <h2>Last Name : {name.lastName}</h2>
          {/* <h2>{JSON.stringify(name)}</h2> */}
      </form>
    </div>
  )
}

export default UseStateUsingObject
