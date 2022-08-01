import React from 'react'

function FragmentDemo() {
  return (
    // <div>                                                    //if you dont want to addd an additional div tag then make use of React.fragment
    //   <h1>Fragment Demo</h1>
    //   <p>This describes the fragment demo component</p>
    // </div>

    <React.Fragment>            {/*now this  do not add an additional div tag just passes h1 and p in open world*/}
      <h1>Fragment Demo</h1>        
      <p>This describes the fragment demo component</p>
    </React.Fragment>
  )
}

export default FragmentDemo
