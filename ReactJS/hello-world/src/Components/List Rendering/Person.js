import React from 'react'


//here we destructure the props.person to person
//the person attribute in Namelist file is the props and nthen we destructure it 
//keys are not accessible in child component
function Person({person}) {
  return (
    <div>
      <h2>I am {person.name}.I am {person.age} years old . I know {person.skill}</h2>
    </div>
  )
}

export default Person
