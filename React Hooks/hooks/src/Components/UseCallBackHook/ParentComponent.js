import React,{useCallback, useState} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {

    const [age , setAge] = useState(18)
    const [salary , setSalary] = useState(50000)

    const incrementAge = useCallback( () => {
        setAge(age + 1)
    } , [age] )

    //usecallbacks is used to tell the react.memo that only render this function when the required prop or state is changed which is given to usecallbacks hook as a second parameter
    const incrementSalary = useCallback( () => {
        setSalary(prevSalary => prevSalary + 1000)
    } , [ salary] )

  return (
    <div>
        <Title />
        <Count text="Age" count={age} />
        <Button clickHandler={incrementAge} >Increment Age</Button>
        <Count text="salary" count={salary}></Count>
        <Button clickHandler={incrementSalary}> Increment Salary</Button> 
    </div>
  )
}

export default ParentComponent
// so here react.memo just checks if everytime the component is rendered . it will return the component only if there is some change in the state or prop is observed and if no change is observed then nothing is returned
//if react.memo is not used then everytime rerenders every component is rendered

//this hook is preferred not to use with evry function
//this is a performan optimization