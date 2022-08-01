import React from 'react'

function Column() {

  return (
    // <div>                    //if you use div then we are putting an div tag under <tr> . which is not allowed. so use React.Fragment
    //   <td>Name</td>
    //   <td>Tejas</td>
    // </div>

    <React.Fragment>        {/*//now using this there is no div tag in between*/}
        <td>Name</td>
        <td>Tejas</td>
    </React.Fragment>
  
    // <>        {/*//this can also be used but you cannot use key attribute here */}
    //     <td>Name</td>
    //     <td>Tejas</td>
    // </>
  
  
  
  )
  //we can also pass key inside the react.fragment when we are dealing with the list 
  //for now react.Fragment only takes key as one of the attribute
}

export default Column
