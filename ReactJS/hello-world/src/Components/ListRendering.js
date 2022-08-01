import React from 'react'

function ListRendering() {
    const names  = ['Tejas' , 'Deep' , 'Bhavna'];
    const nameList = names.map( name => <h2>{name}</h2>)    //map method just took out each name in the manner we want from the names array
    return <div>{nameList}</div>
}

export default ListRendering
