import React from 'react'
import Person from './Person';

function NameList() {

    const persons = [
        {
            id : 1,
            name : 'Tejas',
            age: '20',
            skill : 'React'
        } ,
        {
            id : 2,
            name : 'prajwal',
            age: '18',
            skill : 'no'
        } ,
        {
            id : 3,
            name : 'rajesh',
            age: '55',
            skill : 'vue'
        }
    ]

    //key prop is a specistring attribute you need to include when creating list of elements
    //keys give the elements  a stable identity
    //keys help react identify which items have changed are added or are removed
    //help in efficient update of the user interface. 
    const personList = persons.map( person => <Person key={person.id} person={person}></Person>);       
    //here we set the pperson parameter .then in the person tag we added the person attribute and set its value to person

    return <div>{personList}</div>
  
}

export default NameList
