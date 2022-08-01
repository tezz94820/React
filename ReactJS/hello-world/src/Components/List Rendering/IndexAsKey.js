import React from 'react'

function IndexAsKey() {
  
  const names = ['Tejas', 'Ram','Shiv'];
  const nameList = names.map( (name,index) => <h2 key={index}>{index} {name}</h2>)
  return <div>{nameList}</div>
}

export default IndexAsKey

//adding index as a key value is not prescribed because when react renders .if there is 3 elements and you added new element to list 
//it is added to last, evenif you tried to add it at first.therefore use key as a value which is unique.

//whwn to use index as a key ?
//1) the item in your list do not have a unique id.
//2) the list is a static list and will not change
//3) the list will never be reordered or filtered